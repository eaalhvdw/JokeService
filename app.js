"use strict";

// INITIALIZATION
const controller = require('./controllers/jokesApiController');
const express = require('express');
const morgan = require('morgan');
const fetch = require('node-fetch');
const config = require('./config');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));

// MONGODB & MONGOOSE SETUP
const mongoose = require('mongoose');
mongoose.Promise = Promise;
//TODO: Connect to local database
//mongoose.connect(config.localMongoDB + '/JokeService2019DB', {useNewUrlParser: true, useUnifiedTopology: true});

// ROUTES FOR THE APP
//const jokeRouter = require('./routes/jokesApi');
const registryRouter = require('./routes/registryApi');
//app.use('/', jokeRouter);
app.use('/', registryRouter);

// START SERVER
app.get('/api/jokes', async (request, response) => {
    try {
        let jokes = await controller.getJokes();
        response.send(jokes);
    } catch (error) {
        if (typeof error.message === 'number')
            response.sendStatus(error.message);
        else {
            response.send('app.js:36 - ' + error.name + ': ' + error.message);
        }
    }
}).get('/', (request, response) => {
    response.sendStatus(404);
}).listen(8080);
console.log('Listening on port 8080 ...');

/*
// START SERVER
const port = process.env.PORT || config.localPort;
app.listen(port);
console.log('Listening on port ' + port + '...');
*/

module.exports = app; // pga. tests