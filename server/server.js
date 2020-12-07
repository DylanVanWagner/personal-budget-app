const express = require('express');
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");
const budgetModel = require("./budget_schema");
const { link } = require('fs');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.use(cors());
// app.use('/', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
let url = 'mongodb://localhost:27017/mongo_nodejs';

const secretKey = 'My super secret key';
const jwtMW = exjwt ({
  secret: secretKey,
  algorithms: ['HS256']
});

// hardcoded users
let users = [
  {
    id: 1,
    username: "dylan",
    password: "123",
  },
  {
    id: 2,
    username: "van",
    password: "456",
  },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  for (let user of users) {
    if (username == user.username && password == user.password) {
      let token = jwt.sign(
        { id: user.id, username: user.username },
        secretKey,
        { expiresIn: "7d" }
      );
      res.json({
        success: true,
        err: null,
        token,
      });
      break;
    } else {
      res.status(401).json({
        success: false,
        token: null,
        err: "Username or password is incorrect",
      });
    }
  }
});

app.put("/api/signUp", (req, res) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Connected to the database");
            newData = {
                username: req.body.username,
                password: req.body.password,
            }
            loginModel.insertMany(newData)
                    .then((data) => {
                        console.log(data);
                        res.json("Success");
                        mongoose.connection.close();
                    })
                    .catch((connectionError) => {
                        console.log(connectionError);
                        res.send("Error");
                    })
        })
        .catch((connectionError) => {
            console.log(connectionError);
            res.send("Error");
        })
})

app.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, "/public/homepage.html"));
});

app.use(function (err, req, res, next) {
  console.log(err.name === "UnauthorizedError");
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      success: false,
      officialError: err,
      err: "Username or password is incorrect 2",
    });
  } else {
    next(err);
  }
});

//Dashboard.js

app.get("/login", (req, res) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Connected to the database");
            budgetModel.find({})
                    .then((data) => {
                        res.json(data);
                        mongoose.connection.close();
                    })
                    .catch((connectionError) => {
                        console.log(connectionError);
                    })
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })
});

app.put("/addEntry", (req, res) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("Connected to the database");
            newData = {
                title: req.body.title,
                price: req.body.price,
                color: req.body.color
            }
            budgetModel.insertMany(newData)
                    .then((data) => {
                        console.log(data);
                        res.json("Success");
                        res.status(200).send(data);
                        mongoose.connection.close();
                    })
                    .catch((connectionError) => {
                        console.log(connectionError);
                        res.send("Error");
                    })
        })
        .catch((connectionError) => {
            console.log(connectionError);
            res.send("Error");
        })
})

app.get("/budget", (req, res) => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
          .then(() => {
              console.log("Connected to the database");
              budgetModel.find({})
                      .then((data) => {
                          res.json(data);
                          mongoose.connection.close();
                      })
                      .catch((connectionError) => {
                          console.log(connectionError);
                      })
          })
          .catch((connectionError) => {
              console.log(connectionError);
          })
  });

app.listen(PORT, () => {
  console.log(`serving on port ${PORT}`);
});
