const express = require("express");
const router = express.Router();
const databaseManager = require("../db/databaseManager");

// create new users
router.post("/", async (req, res) => {
  // let db = await databaseConnection();
  let data = {};
  let userObject = {
    _id: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  };
  let statusCode = 200;
  // for (let user of users) {
  //   if (user.email === req.body.email) {
  //     res.status(500).send(JSON.stringify({ message: "Email already in use" }));
  //   }
  // }
  try {
    // users.push(req.body); // replace with db op
    await databaseManager.create("users", userObject);
    data.user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };
  } catch (err) {
    statusCode = 500;
    data.message = err.message;
  }
  res.status(statusCode).send(JSON.stringify(data));
});

router.post("/is-email-available", async (req, res) => {
  // let db = await databaseConnection();
  let email = req.body.email;
  let statusCode = 200;
  let data = {};
  try {
    let users = await databaseManager.read("users", {});
    let available = users.every((user) => {
      return user._id !== email;
    });
    data.isAvailable = available;
  } catch (err) {
    statusCode = 500;
    data.message = err.message;
  }
  res.status(statusCode).send(JSON.stringify(data));
});

// get user (login)
router.post("/login", async (req, res) => {
  // let db = await databaseConnection();
  let data = {};
  let statusCode = 200;

  try {
    let users = await databaseManager.read("users", {
      _id: req.body.email,
    });
    let user = users[0];
    if (user.password === req.body.password) {
      data.user = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    } else {
      statusCode = 500;
      data.message = "The email/password did not match our record";
    }
  } catch (err) {
    statusCode = 500;
    data.message = err.message;
  }

  res.status(statusCode).send(JSON.stringify(data));
});

module.exports = router;
