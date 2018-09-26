const router = require("express").Router();
const testRoute = require("./test.js");

// Routes
router.use("/test", testRoute);

module.exports = router;
