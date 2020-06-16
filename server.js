const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session"); // install this library
const KnexSessionStore = require("connect-session-knex")(session); // install library

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });

  module.exports = server;