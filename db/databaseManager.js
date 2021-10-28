// this should always return a ready to operate mongodb client
// it should connect if no connection is made
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URL;
// let client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   keepAlive: true,
// });

async function getMongoDB() {
  this.db = null;
  if (!this.db) {
    let client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    });

    let connection = await client.connect();
    this.db = connection.db("trashare");
  }

  return this;
}

let mongo = new getMongoDB();

const dbOp = async (db) => {
  // console.log(connection);
  db.collection("users").insertOne({ _id: "223", email: "1@1.com" });
};

dbOp(mongo);

// module.exports = getMongoDBConnection;
