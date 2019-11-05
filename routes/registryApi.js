const controller = require("../controllers/registryApiController");
const express = require('express');
const router = express.Router();

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