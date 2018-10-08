const router = require("express").Router();
const usersRoute = require("./users.js");
const roomsRoute = require ("./rooms.js");
const messagesRoute = require ("./messages.js");
// Routes
router.use("/users", usersRoute);
router.use("/rooms", roomsRoute);
router.use("/messages", messagesRoute);

module.exports = router;
