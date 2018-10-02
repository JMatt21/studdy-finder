const router = require("express").Router();
const usersRoute = require("./users.js");

// Routes
router.use("/users", usersRoute);

module.exports = router;
