const controller = require('../controllers/registryApiController');
const express = require('express');
const router = express.Router();

router
    .get('/api/services', (request, response) => {
        controller.getRegistryJokes(request, response);
    })
    .post('api/services', (request, response) => {
        controller.postJokeService(request, response);
    })
    .delete('api/services', (request, response) => {
        controller.deleteJokeService(request, response);
    });

module.exports = router;