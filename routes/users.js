var express = require("express");
var router = express.Router();
// const { MongoClient } = require("mongodb");
// mongodb setup
// const uri = process.env.DB_URL;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect(async (err) => {
//   // const collection = client.db("trashare").collection("users");
//   // let res = await collection.insertOne({ email: "123@1.com" });
//   client.close();
// });

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    password: "123",
  },
];

// create new users
router.post("/", (req, res) => {
  let data = {};
  let statusCode = 200;
  // for (let user of users) {
  //   if (user.email === req.body.email) {
  //     res.status(500).send(JSON.stringify({ message: "Email already in use" }));
  //   }
  // }
  try {
    users.push(req.body); // replace with db op
    data.user = { firstName: req.body.firstName, lastName: req.body.lastName };
  } catch (err) {
    statusCode = 500;
    data.message = err.message;
  }
  res.status(statusCode).send(JSON.stringify(data));
});

router.post("/is-email-available", (req, res) => {
  let email = req.body.email;
  let available = users.every((user) => {
    return user.email !== email;
  });
  res.send(JSON.stringify({ isAvailable: available }));
});

// get user (login)
router.post("/login", (req, res) => {
  let data = {};
  let statusCode = 200;
  let loginUser = users.filter((el) => {
    return el.email === req.body.email && el.password === req.body.password;
  });
  if (loginUser.length === 1) {
    let loggedIn = loginUser[0];
    data.user = {
      firstName: loggedIn.firstName,
      lastName: loggedIn.lastName,
    };
  } else {
    statusCode = 500;
    data = { message: "The email/password did not match our record" };
  }
  res.status(statusCode).send(JSON.stringify(data));
});

module.exports = router;
