"use strict";

// INITIALIZATION
const controller = require('./controllers/jokesApiController'); //Midlertidigt
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const app = express();
app.use(express.static('public'));
app.use(express.json);
app.use(morgan('tiny'));

// MONGODB & MONGOOSE SETUP
const mongoose = require('mongoose');
mongoose.Promise = Promise;
// TODO: Lav mongo database og indsæt i strengen herunder
//mongoose.connect(config.localMongoDB + '//*jokeDB*/', {useNewUrlParser: true, useUnifiedTopology: true});

// ROUTES FOR THE APP
const jokeRouter = require('./routes/jokesApi');
app.use('/', jokeRouter);

// START SERVER
app.get('/', (req, res) => {
    try {
        let jokes = controller.getJokes();
        res.send(jokes);
    } catch (e) {
        if (typeof e.message === 'number')
            res.sendStatus(e.message);
        else {
            res.send(e.name + ": " + e.message);
        }
    }
}).get('/', (req, res) => {
    res.sendStatus(404);
}).listen(8080);
console.log('Listening on port 8080...');

/*
const port = process.env.PORT || config.localPort;
app.listen(port);
console.log('Listening on port ' + port + '...');
*/

module.exports = app; // pga. tests