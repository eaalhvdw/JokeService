const controller = require("../controllers/jokesApiController");
const express = require('express');
const router = express.Router();

router
    .get('/api/jokes', (req, res) => {
        //TODO: Vis egne jokes
    })
    .get('/api/othersites', (req, res) => {
        //TODO: Vis liste over andre services
    })
    .get('/api/othersites/:site', (req, res) => {
        //TODO: Vis jokes fra den valgte service
    })
    .post('api/jokes', (req, res) => {
        //TODO: Gem ny joke
    });

module.exports = router;