"use strict";

const Joke = require('../models/Joke');

// Returns a promise that resolves when the joke is created
exports.createJoke = function (setup, punchline) {
    const joke = new Joke({
        setup,
        punchline
    });
    return joke.save();
};

// Returns a promise that resolves when a joke is found with the specified id
exports.getJoke = function(jokeId) {
    return Joke.findOne({_id: jokeId}).exec();
};

// Returns a promise that resolves with an array of all jokes
exports.getJokes = function() {
    return Joke.find().exec();                                              // Is this right?
};
