const controller = require("../controllers/jokesApiController");
const express = require('express');
const router = express.Router();

/**
 * None of these router methods work properly yet.
 */
router
    .get('/api/jokes', (req, res) => {
        // Show own jokes (through force for the second time).
        controller.getJokes()
            .then(val => res.json(val))
            .catch(err => {
                console.error("Error: " + err);
                if(err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    })
    .get('/api/othersites', (req, res) => {
        //TODO: Show list of other jokeservices.
    })
    .get('/api/othersites/:site', (req, res) => {
        //TODO: Show jokes of another jokeservice.
    })
    .post('api/jokes', (req, res) => {
        //TODO: Create and save a new joke to the database.
        const {setup, punchline} = req.body;
        controller.createJoke(setup, punchline)
            .then(() => res.json({message: 'Joke saved!'}))
            .catch(err => {
                console.error("Error: " + err);
                if (err.stack) console.error(err.stack);
                res.status(500).send(err);
            });
    });

module.exports = router;