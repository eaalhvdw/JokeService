const controller = require("../controllers/jokesApiController");
const express = require('express');
const router = express.Router();

/**
 * None of these router methods work properly yet.
 */
router
    .get('/api/jokes', (req, res) => {
        // Show own jokes (through force for the second time).
        const jokes = [
            {setup: 'Where does the king keep his armies?', punchline: 'In his sleeves!'},
            {setup: 'foo', punchline: 'bar'},
            {setup: 'a', punchline: 'b'},
            {setup: '&&', punchline: '||'}
        ];
        res.send(jokes);
    })
    .get('/api/othersites', (req, res) => {
        //TODO: Show list of other jokeservices.
    })
    .get('/api/othersites/:site', (req, res) => {
        //TODO: Show jokes of another jokeservice.
    })
    .post('api/jokes', (req, res) => {
        //TODO: Create and save a new joke to the database.
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