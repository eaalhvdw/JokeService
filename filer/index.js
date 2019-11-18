"use strict";
setOnClick();
update();

/**
 * Done
 */
function update() {
    // Reset input fields
    for (let input of document.querySelectorAll('input')) input.value = '';

    // Retirieve and show own jokes
    getJokes();
    // Retrieve and show list of jokeservices
    getJokeServices();
}

/**
 * Helper method to fetch urls.
 * @param url
 * @returns {Promise<any>}
 * @constructor
 */
async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.json();
}

/**
 * Helper method for the templating.
 * @return {string}
 */
async function GETtext(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.text();
}

/**
 * Done Done
 * @param jokes
 * @returns {Promise<*>}
 */
async function generateJokesTable(jokes) {
    let template = await GETtext('/jokes.handlebars');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({jokes}); // {jokes: jokes}
}

/**
 * Done Done
 * @param jokeservices
 * @returns {Promise<*>}
 */
async function generateJokeServicesList(jokeservices) {
    let template = await GETtext('/jokeservices.handlebars');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({jokeservices}); // {jokeservice: jokeservice}
}

/**
 * Done Done
 * @returns {Promise<void>}
 */
async function getJokes() {
    try {
        // Get jokes from local mongoDB
        let jokes = await GET('/api/jokes');

        // Generate HTML for table with jokes
        let jokesTable = await generateJokesTable(jokes);

        // Show table of jokes in web browser
        let showJokes = document.getElementById('showJokes');
        showJokes.innerHTML = jokesTable;
    }  catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

/**
 * Done Maybe
 * @returns {Promise<void>}
 */
async function getOtherJokes() {
    try {
        let jokes = await GET('/api/otherjokes/:site');

        let jokesTable = await generateJokesTable(jokes);

        let showJokes = document.getElementById('showJokes');
        showJokes.innerHTML = jokesTable;
        //document.getElementById('jokesHeader').innerHTML = siteName;
    } catch (e) {
        console.log("Error: " + e);
    }
}

/**
 * Done Done
 * @returns {Promise<void>}
 */
async function getJokeServices() {
    try {
        // Get jokeservices from jokeregistry
        let jokeservices = await GET('/api/othersites');

        // Generate HTML for list of jokeservices
        let jokeserviceList = await generateJokeServicesList(jokeservices);

        // Show list of jokeservices in browser
        let showOtherServices = document.getElementById('showOtherServices');
        showOtherServices.innerHTML = jokeserviceList;

        // Add eventlistener to each service on the list
        let lis = document.querySelectorAll('li');
        lis.forEach(e => e.addEventListener('click', getOtherJokes));
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

/**
 * Done Done
 */
function setOnClick() {
    document.querySelector('button').onclick = () => {
        const joke = {
            setup: document.querySelector('#setupInp').value,
            punchline: document.querySelector('#punchlineInp').value
        };
        fetch('/api/jokes', {
            method: "POST",
            body: JSON.stringify(joke),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                if (response.status >= 400)
                    throw new Error(response.status);
                else
                    update();
                return response.json();
            })
            .then(result => console.log(`Resultat: %o`, result))
            .catch(error => console.log('Fejl: ' + error));
    };
}