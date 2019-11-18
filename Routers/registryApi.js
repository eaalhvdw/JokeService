const controller = require('../controllers/registryApiController');
const express = require('express');
const router = express.Router();

router
    .get('/api/services', (request, response) => {
        controller.getRegistryJokes()
            .then(value => response.json(value))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
    })
    .post('api/services', (request, response) => {
        /*
        controller.postJokeService()
            .then(value => response.json(value))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
         */
    })
    .delete('/api/services', (request, response) => {
        /*
        controller.deleteJokeService()
            .then(value => response.json(value))
            .catch(error => {
                console.error("Error: " + error);
                if (error.stack) console.error(error.stack);
                response.status(500).send(error);
            });
         */
    });

module.exports = router;