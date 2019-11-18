const jokesController = require('../controllers/jokesApiController');
const registryController = require('../controllers/registryApiController');
const express = require('express');
const router = express.Router();

router
    .get('/api/jokes', (request, response) => {
        jokesController.getJokes()
            .then(value => response.json(value))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
    })
    .get('/api/othersites', (request, response) => {
        registryController.getRegistryJokes()
            .then(value => response.json(value))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
    })
    .get('/api/otherjokes/:site', (request, response) => {
    //TODO: Get jokes from chosen site
        // let site = ;
        GET('site/api/jokes')
            .then(value => response.json(value))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
    })
    .post('/api/jokes', (request, response) => {
        const {setup, punchline} = request.body;
        jokesController.createJoke(setup, punchline)
            .then(() => response.json({message: 'Joke saved!'}))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
    });

module.exports = router;