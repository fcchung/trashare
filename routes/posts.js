const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
// const postDB = require("../db/postModel.js");

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
router.post("/", upload.array("images"), async (req, res) => {
  let data = req.body;
  //data.createdAt = new Date().getTime();

  console.log(
    `Creating new post: ${JSON.stringify(data)} with ${req.files.map((f) =>
      JSON.stringify(f)
    )} images`
  );
  //trying to mimic how prof post to database in his example
  // const dbRes = await postDB.createPost(data);
  // res.redirect("/");
  // res.send(
  //   `Creating new post: ${JSON.stringify(data)} with ${req.files.map((f) =>
  //     JSON.stringify(f)
  //   )} images`
  // );
  res.status(200).send(JSON.stringify({ postId: "123" }));
});

// Get post with id
router.get("/:id", (req, res) => {
  const postStub = [
    {
      id: "001",
      title: "Test1",
      description: "test post #1",
      createdAt: Date.now(),
      location: "lat lng",
    },
  ];
  res.send(JSON.stringify(postStub[0]));
});

// Delete post with id
router.delete("/:id", (req, res) => {
  res.send(`Deleting post with id: ${req.params.id}`);
});

module.exports = router;
