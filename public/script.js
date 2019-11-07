const controller = require('../controllers/jokesApiController');
const controller2 = require('../controllers/registryApiController');
/**
 * I have no idea what's going on in this function,
 * but we are using it in the next function, so I
 * guess we need it for now.
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
 * *Right now we are just getting the jokes from the controller because nothing works yet.
 *  (Including this.)
 * @returns {Promise<void>}
 */
async function main() {
    try {
        let jokes = await controller.getJokes();

        let jokesDiv = document.getElementById('ourJokes');
        let h2 = jokesDiv.firstElementChild;
        let jokesTable = await generateJokesTable(jokes);
        jokesTable.parentElement = jokesDiv;
        document.appendChild(jokesTable);
        document.body.insertBefore(h2, jokesTable);

        let jokeServices = await controller2.getRegistryJokes();
        let otherDiv = document.getElementById('otherJokes');
        let h = otherDiv.firstElementChild;
        let jokeserviceTable = await generateJokesTable(jokes);
        jokeserviceTable.parentElement = otherDiv;
        document.appendChild(jokeserviceTable);
        document.body.insertBefore(h, jokeserviceTable);
        document.body.innerHTML = await generateJokeserviceTable(jokeServices);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();