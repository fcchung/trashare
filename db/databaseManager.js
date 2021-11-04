// By Fengrui Gan and Felix Chung
const ConnectionPool = require("./ConnectionPool");

const getDBCollection = async (collectionName) => {
  const conn = await ConnectionPool();
  return conn.getDB().collection(collectionName);
};

const create = async (collectionName, data) => {
  const collection = await getDBCollection(collectionName);
  await collection.insertOne(data);
};

const read = async (collectionName, query) => {
  if (typeof query !== "object") {
    throw new TypeError("Query Expression is not an object");
  }
  const collection = await getDBCollection(collectionName);
  let res = await collection
    .find(query)
    .limit(50)
    .sort({ createdAt: -1 })
    .toArray();
  return res;
};

const update = async (collectionName, filter) => {
  if (typeof filter !== "object") {
    throw new TypeError("Filter Expression is not an object");
  }
  const collection = await getDBCollection(collectionName);
  await collection.updateOne(filter);
};

const destroy = async (collectionName, filter) => {
  if (typeof filter !== "object") {
    throw new TypeError("Query Expression is not an object");
  }
  const collection = await getDBCollection(collectionName);
  await collection.deleteOne(filter);
};

module.exports = { create, read, update, destroy };
