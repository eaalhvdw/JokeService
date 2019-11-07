const controller = require("../controllers/registryApiController");
const express = require('express');
const router = express.Router();

/**
 * I think this i correct, but there is a minor technical problem
 * with the get-method - we'll ask ED next time.
 */
router
    .get('/api/services', (req, res) => {
        controller.getRegistryJokes(req, res);
    })
    .post('api/services', (req, res) => {
        controller.postJokeService(req, res);
    })
    .delete('api/services', (req, res) => {
        controller.deleteJokeService(req, res);
    });

module.exports = router;