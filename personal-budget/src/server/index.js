const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');

const port = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken());

mongoose.connect(`mongodb://localhost:27017/final`)
.then(() => {
  console.log('Connected to database');
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
});
