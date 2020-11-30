const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const budgetModel = require("./models/budget_schema");
const bodyParser = require("body-parser");
app.use(bodyParser.json())

let url = 'mongodb://localhost:27017/mongo_nodejs';

app.use(cors());

app.use('/', express.static('public'));

app.get("/mongo_nodejs", (req, res) => {
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

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
