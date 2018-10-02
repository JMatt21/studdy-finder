const router = require("express").Router();
const passportRoutes = require("./passport.js");

// Routes
router.use("/", passportRoutes);

module.exports = router;
