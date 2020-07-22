const router = require('express').Router()
const users = require('./userModel')

router.get("/", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.send(err));
  });
module.exports = router