/*
  this is a module pattern for mongodb client and database
  it should return a method to retrieve the same database instance
  for all routes
*/
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URL;
const DB_NAME = "trashare";

function ConnectionPool() {}

ConnectionPool.db = null;
ConnectionPool.client = null;

ConnectionPool.prototype.connect = async function (dbName) {
  if (ConnectionPool.isConnected) {
    return;
  }
  // console.log("Establishing connection to db");
  if (ConnectionPool.client === null) {
    ConnectionPool.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
      maxPoolSize: 5,
    });
  }
  await ConnectionPool.client.connect();
  if (ConnectionPool.db === null) {
    ConnectionPool.db = ConnectionPool.client.db(dbName);
  }
  ConnectionPool.isConnected = true;
};

ConnectionPool.prototype.getDB = function () {
  return ConnectionPool.db;
};

ConnectionPool.prototype.getClient = function () {
  return ConnectionPool.client;
};

module.exports = async () => {
  let conn = new ConnectionPool();
  await conn.connect(DB_NAME);
  return conn;
};
