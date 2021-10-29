const { MongoClient } = require("mongodb");

function postDB() {
  const post = {};
  const url = process.env.DB_URL;
  const DB_NAME = "trashare";

  post.createPost = async (post) => {
    let client;
    try {
      client = new MongoClient(url, { useUnifiedTopology: true });
      await client.connect();
      const res = await client.db(DB_NAME).collection("posts").insertOne(post);
      return res;
    } finally {
      client.close();
    }
  };
}
