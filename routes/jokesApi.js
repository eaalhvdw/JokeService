const controller = require("../controllers/jokesApiController");
const express = require('express');
const router = express.Router();

router
    .get('/api/jokes', (req, res) => {
        //TODO: Vis egne jokes
        controller.getJokes()
            .then(val => res.json(val))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
    })
    .get('/api/othersites', (req, res) => {
        //TODO: Vis liste over andre services
    })
    .get('/api/othersites/:site', (req, res) => {
        //TODO: Vis jokes fra den valgte service
    })
    .post('api/jokes', (req, res) => {
        //TODO: Lav og gem ny joke
        let j = undefined;
        const {setup, punchline} = req.body;
        controller.createJoke(setup, punchline)
            .then(joke => {
                j = joke;
                return controller.getJoke(jokeId);
            })
            .then(() => res.json({message: 'Joke saved!'}))
            .catch(err => {
                console.error("Error: " + err);
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    });

module.exports = router;