const express = require("express");
const multer = require("multer");
const router = express.Router();
const databaseManager = require("../db/databaseManager");
const imageUpload = require("../utils/s3UploadUtil");
const uuid = require("uuid").v4;
const path = require("path");
let statusCode = 200;

// Fengrui Gan
// setup multer for pass through upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniquePrefix = uuid();
    cb(null, `${uniquePrefix}.${file.originalname.split(".")[1]}`);
  },
});
const upload = multer({ storage: storage });

// Felix Chung for everything below
// Read all posts
router.get("/", async (req, res) => {
  let data;
  let methodChain = {
    limit: [50],
    sort: [{ createdAt: -1 }],
  };
  try {
    data = await databaseManager.read("posts", {}, methodChain);
  } catch (err) {
    statusCode = 500;
    res.send(err);
  }
  res.send(JSON.stringify(data));
});

// Create new Post
router.post("/", upload.array("images"), async (req, res) => {
  let postId = uuid();
  let data = { ...req.body, _id: postId };

  let files = req.files.map((ele) => {
    return {
      fileName: ele.filename,
      fileKey: `${postId}/${ele.filename}`,
      mimeType: ele.mimetype,
    };
  });

  data.images = [];
  files.forEach((ele) => {
    imageUpload(
      path.join(__dirname, `uploads/${ele.fileName}`),
      ele.fileKey,
      ele.mimeType
    );
    data.images.push(
      "https://trash-sharing-bucket.s3.us-west-2.amazonaws.com/" + ele.fileKey
    );
  });

  try {
    await databaseManager.create("posts", data);
  } catch (err) {
    statusCode = 500;
    data.message = err.message;
  }
  res.status(statusCode).send(JSON.stringify({ postId: postId }));
});

// Get post with id
router.get("/:id", async (req, res) => {
  let data;
  try {
    data = await databaseManager.read("posts", { _id: req.params.id });
  } catch (err) {
    statusCode = 500;
    res.send(err);
  }
  res.send(JSON.stringify(data));
});

// Delete post with id
router.delete("/:id", async (req, res) => {
  await databaseManager.destroy("posts", { _id: req.params.id });

  res.send(`Deleting post with id: ${req.params.id}`);
});

module.exports = router;
