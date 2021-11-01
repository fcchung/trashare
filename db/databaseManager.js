// const { MongoClient } = require("mongodb");
const ConnectionPool = require("./ConnectionPool");

// const dbOp = async (callback, ...params) => {
//   let client;
//   try {
//     client = new MongoClient(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     await client.connect();
//     const db = client.db("trashare");
//     callback.call(null, db, ...params);
//   } finally {
//     client.close();
//   }
// };

const create = async (collectionName, data) => {
  const conn = await ConnectionPool();
  const db = conn.getDB();
  const collection = db.collection(collectionName);
  await collection.insertOne(data);
};

const read = async (collectionName, query) => {
  if (typeof query !== "object") {
    throw new TypeError("Query Expression is not an object");
  }
  const conn = await ConnectionPool();
  const db = conn.getDB();
  const collection = db.collection(collectionName);
  let res = await collection.find(query).toArray();
  return res;
};

const update = async (collectionName, filter) => {
  if (typeof filter !== "object") {
    throw new TypeError("Filter Expression is not an object");
  }
  const conn = await ConnectionPool();
  const db = conn.getDB();
  const collection = db.collection(collectionName);
  await collection.updateOne(filter);
};

const destroy = async (collectionName, filter) => {
  if (typeof filter !== "object") {
    throw new TypeError("Query Expression is not an object");
  }
  const conn = await ConnectionPool();
  const db = conn.getDB();
  const collection = db.collection(collectionName);
  await collection.deleteOne(filter);
};

module.exports = { create, read, update, destroy };
