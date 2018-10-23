
const express = require('express');
const model1  = require('./models/model1');

let app = express();

app.use(express.json());

app.use('/api/v1/model1', model1);

module.exports = app;

