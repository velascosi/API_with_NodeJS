'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// BD connect
mongoose.connect('mongodb://sil:sil@ds014648.mlab.com:14648/ndstr-sitarq');

// Models connect
const Product = require('./models/product');

// route connect
const indexRoute = require('./route/index-route');
const productRoute = require('./route/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
