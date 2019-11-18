"use strict";

// INITIALIZATION
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const app = express();
app.use(express.static('filer'));
app.use(express.json());
app.use(morgan('tiny'));

// MONGODB & MONGOOSE SETUP
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(config.mongoDBhost, {useNewUrlParser: true, useUnifiedTopology: true});

// ROUTES FOR THE APP
const jokeRouter = require('./Routers/jokeApi');
const registryRouter = require('./Routers/registryApi');
app.use('/', jokeRouter);
app.use('/', registryRouter);

// START SERVER
app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}...`);
});

module.exports = app;   // For tests