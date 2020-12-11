const express = require('express');
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require("mongoose");

