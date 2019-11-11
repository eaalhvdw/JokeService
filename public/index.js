const controller = require('../controllers/jokesApiController');

/**
 * Help method
 * @return {string}
 */
async function GETtext(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error('GET status code ' + response.status);
    return await response.text();
}

/**
 * GET endpoint.
 * @param url
 * @returns {Promise<*>}
 * @constructor
 */
async function GET(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error('GET status code ' + response.status);
    return await response.json();
}

/**
 * This function is generating a table in HTML through joke.hbs to show our jokes.
 * @param jokes
 * @returns {Promise<*>}
 */
async function generateJokesTable(jokes) {
    let template = await GETtext('/joke.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({jokes}); // {jokes: jokes}
}

/**
 * This function is generating a table in HTML through jokeServicesList.hbs
 * to show a list of other jokeservices.
 * @param jokeServices
 * @returns {Promise<*>}
 */
async function generateJokeserviceTable(jokeServices){
    let temp = await GETtext('/jokeServiceList.hbs');
    let compiledTemp = Handlebars.compile(temp);
    return compiledTemp({jokeServices});
}

/**
 * This function is trying to send our jokes from the database* to the browser.
 * *Right now we are just getting the jokes from the jokesController because nothing works yet.
 *  (Including this.)
 * @returns {Promise<void>}
 */
async function main() {
    try {
        //let jokes = await GET('/api/jokes');
        let jokes = controller.getJokes();

        let jokesDiv = document.getElementById('ourJokes');
        let h = jokesDiv.firstElementChild;
        let jokesTable = await generateJokesTable(jokes);
        jokesTable.parentElement = jokesDiv;
        document.appendChild(jokesTable);
        document.body.insertBefore(jokesTable, h);
/*
        let jokeServices = await GET('/api/jokes');
        let otherDiv = document.getElementById('otherJokes');
        let h2 = otherDiv.firstElementChild;
        let jokeserviceTable = await generateJokesTable(jokes);
        jokeserviceTable.parentElement = otherDiv;
        document.appendChild(jokeserviceTable);
        document.body.insertBefore(h2, jokeserviceTable);
        document.body.innerHTML = await generateJokeserviceTable(jokeServices);
*/
    } catch (error) {
        console.error('index.js:77 - ' + error.name + ': ' + error.message);
    }
}

main();