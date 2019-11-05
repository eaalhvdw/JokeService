const controller = require('../controllers/jokesApiController')

/**
 * @return {string}
 */
async function GETtext(url) {
    const OK = 200;
    let response = await fetch(url);
    if (response.status !== OK)
        throw new Error("GET status code " + response.status);
    return await response.text();
}

async function generateJokesTable(jokes) {
    let template = await GETtext('/joke.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({jokes}); // {jokes: jokes}
}

async function main() {
    try {
        let jokes = await controller.getJokes();
        document.body.innerHTML = await generateJokesTable(jokes);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}

main();