const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const authRoute = require('./auth-route.js/auth-router')


const  dbConnect = require('./data/connections')

 

const server = express();






const sessionConfig = {
    name: "first cookie",
    secret: process.env.SESSION_SECRET || "secret session",
    cookie: {
      maxAge: 1000 * 60 * 10, 
      secure: process.env.COOKIE_SECURE || false, 
      httpOnly: true, 
    },
    resave: false,
    saveUninitialized: true, 
    store: new KnexSessionStore({
      knex: dbConnect,
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 6000, 
    }),
  };


  server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))



server.use('/api', authRoute)

module.exports = server; 