const router = require("express").Router();
const searchRoute = require("./search.js");

// Routes
router.use(searchRoute);

module.exports = router;
