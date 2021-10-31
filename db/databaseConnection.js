/*
  this is a module pattern for mongodb client and database
  it should return a method to retrieve the same database instance
  for all routes
*/
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URL;
const DB_NAME = "trashare";

const databaseClient = () => {
  let client = null;

  return () => {
    if (client === null) {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        maxPoolSize: 10,
        minPoolSize: 1,
      });
    }
    return client;
  };
};

const databaseConnection = () => {
  let db = null;

  return (async () => {
    if (db === null) {
      let connection = await databaseClient().connect();
      return connection.db(DB_NAME);
    }
  })();
};

module.exports = async () => {
  return await databaseConnection();
};
