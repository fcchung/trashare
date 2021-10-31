const databaseConnection = require("./databaseConnection");

const create = async (collectionName, data) => {
  const db = await databaseConnection();
  const collection = db.collection(collectionName);
  await collection.insertOne(data);
};

const read = async (collectionName, query) => {
  if (typeof query !== "object") {
    throw new TypeError("Query Expression is not an object");
  }
  const db = await databaseConnection();
  const collection = db.collection(collectionName);
  let res = await collection.find(query).toArray();
  return res;
};

const update = async (collectionName, filter) => {
  if (typeof filter !== "object") {
    throw new TypeError("Filter Expression is not an object");
  }
  const db = await databaseConnection();
  const collection = db.collection(collectionName);
  await collection.updateOne(filter);
};

const destroy = async (collectionName, filter) => {
  if (typeof filter !== "object") {
    throw new TypeError("Query Expression is not an object");
  }
  const db = await databaseConnection();
  const collection = db.collection(collectionName);
  await collection.deleteOne(filter);
};

module.exports = { create, read, update, destroy };
