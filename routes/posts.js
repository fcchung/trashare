const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

//Sample post
let postStub = [
  {
    id: "001",
    title: "post1",
    description: "Doe",
    images: ["../public/images/testimg1.png", "../public/images/testimg2.png"],
    address: "123",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
  },
  {
    id: "002",
    title: "post2",
    description: "post number 2",
    images: "../public/images/testimg1.png3",
    address: "55555",
    city: "San Francisco",
    state: "CA",
    zip: "94112",
  },
];

// setup multer for pass through upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}.${file.originalname.split(".")[1]}`);
  },
});
const upload = multer({ storage: storage });

// Read all posts
router.get("/", (req, res) => {
  res.send("View all posts");
});

// Create new Post
router.post("/", upload.array("images"), (req, res) => {
  res.send(
    `Creating new post: ${JSON.stringify(req.body)} with ${req.files.map((f) =>
      JSON.stringify(f)
    )} images`
  );
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
