const path = require("path");
const router = require("express").Router();
// Routes connected from folders
const apiRoutes = require("./api");
const passportRoutes = require("./passport");
const searchRoutes = require("./search");
// API Routes
router.use("/api", apiRoutes);
router.use("/search", searchRoutes);
router.use(passportRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
