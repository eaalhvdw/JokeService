const controller = require('../controllers/jokesApiController');
const express = require('express');
const router = express.Router();

/**
 * None of these router methods work properly yet.
 */
router
    .get('/api/jokes', (request, response) => {
        // Show own jokes
        const jokes = controller.getJokes()
            .then(value => response.json(value))
            .catch(err => {
                console.error('jokesApi.js:14 - Error: ' + err);
                if(err.stack) console.error(err.stack);
                response.status(500).send(err);
            });
        response.send(jokes);
    })
    .get('/api/othersites', (request, response) => {
        //TODO: Show list of other jokeservices.
    })
    .get('/api/othersites/:site', (request, response) => {
        //TODO: Show jokes of another jokeservice.
    })
    .post('api/jokes', (request, response) => {
        //TODO: Create and save a new joke to the database.
        const {setup, punchline} = request.body;
        controller.createJoke(setup, punchline)
            .then(() => response.json({message: 'Joke saved!'}))
            .catch(err => {
                console.error('jokesApi.js:38 - Error: ' + err);
                if (err.stack) console.error(err.stack);
                response.status(500).send(err);
            });
    });

module.exports = router;