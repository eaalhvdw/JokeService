"use strict";

const Joke = require('../models/Joke');

/**
 * Returns a promise that resolves when the joke is created.
 * @param setup
 * @param punchline
 * @returns {*}
 */
exports.createJoke = function (setup, punchline) {
    const joke = new Joke({
        setup,
        punchline
    });
    return joke.save();
};

/**
 * Returns a promise that resolves when a joke is found with the specified id.
 * @param jokeId
 * @returns {Promise|ChildProcess|RegExpExecArray}
 */
exports.getJoke = function(jokeId) {
    return Joke.findOne({_id: jokeId}).exec();
};

/**
 * Returns a promise that resolves with an array of all jokes.
 * @returns {Promise<*[]>}
 */
exports.getJokes = function() {
    //Forcing the jokes through the server (see app.js and index.js).
    const jokes = [
        {setup: 'Where does the king keep his armies?', punchline: 'In his sleeves!'},
        {setup: 'foo', punchline: 'bar'},
        {setup: 'a', punchline: 'b'},
        {setup: '&&', punchline: '||'}
    ];
    return Promise.resolve(jokes);
    //return Joke.find().exec();
};