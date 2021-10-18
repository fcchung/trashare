const express = require("express");
const router = express.Router();
const path = require("path");

// GET landing page.
router.get("/", (req, res) => {
  res.send("Landing page");
});

// Get login page
router.get("/login", (req, res) => {
  res.send("Login page");
});

// Get registration page
router.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/registration.html"));
});

// Get all posts page
router.get("/posts", (req, res) => {
  res.send("Main post page");
});

// Get post with id
router.get("/posts/:id", (req, res) => {
  res.send(`Looking at post with id: ${req.params.id}`);
});

module.exports = router;
