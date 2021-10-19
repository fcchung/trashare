const express = require("express");
const router = express.Router();

// Read all posts
router.get("/", (req, res) => {
  res.send("View all posts");
});

// Create new Post
router.post("/", (req, res) => {
  res.send(`Creating new post: ${JSON.stringify(req.body)}`);
});

// Get post with id
router.get("/:id", (req, res) => {
  res.send(`Reading post with id: ${req.params.id}`);
});

// Delete post with id
router.delete("/:id", (req, res) => {
  res.send(`Deleting post with id: ${req.params.id}`);
});

module.exports = router;
