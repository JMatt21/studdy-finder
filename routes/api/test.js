const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
const db = require("../../models");

// Matches with "/api/test"
router.route("/")
  .get(function (req, res) {
    db.Users.findAll({})
      .then(dbUser => {
        res.json('tester');
      })
  })
  .post(function (req, res) {
    db.Users.create({
      User_name: '1',
      email: '2',
      Password: '3'
    }).then(dbUser => {
      res.json(dbUser);
    })
  })

module.exports = router;
