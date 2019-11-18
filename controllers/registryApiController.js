"use strict";
const fetch = require('node-fetch');

/**
 * Helper method to fetch url.
 * @param url
 * @returns {Promise<*>}
 * @constructor
 */
async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
}

let url = 'https://krdo-joke-registry.herokuapp.com/api/services';

/**
 * Get all jokeservices from jokeRegistry
 */
exports.getRegistryJokes = () => {
    return GET(url);
};

/**
 * Register jokeservice to jokeRegistry
 *
exports.postJokeService = (request, response) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(config.register),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
        .then(json => console.log("Registry response: " + JSON.stringify(json)));
};
*/

/**
 * Delete jokeservice from jokeRegistry
 *
exports.deleteJokeService = (request, response) => {
    //TODO: DELETE this jokeservice med verificering af secret
    return fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(config.unregister),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
        .then(json => console.log("Registry response: " + JSON.stringify(json)));
};
 */