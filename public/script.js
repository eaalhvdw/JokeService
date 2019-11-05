setOnClicks();
update();

function update() {
    document.querySelector('#showJokes').innerHTML = '';
    //document.querySelector('#showOtherJokes').innerHTML = '';
    for (let input of document.querySelectorAll('input')) input.value = '';

    getJokes();
}

async function getJokes() {
    const [template, jokeResponse] = await Promise.all([fetch('/joke.hbs')]);
    const [templateText, jokes] = await Promise.all([template.text(), jokeResponse.json()]);
    const compiledTemplate = Handlebars.compile(templateText);
    let jokeHTML = '';
    jokes.forEach(joke => {
        jokeHTML += compiledTemplate({
            setup: joke.setup,
            punchline: joke.punchline
        });
    });
    document.querySelector('#showJokes').innerHTML = jokeHTML;
}

function setOnClicks() {
    document.querySelector('#submitJoke').onclick = () => {
        const msg = {
            setup: document.querySelector('#jokeSetup').value,
            punchline: document.querySelector('#jokePunchline').value,
        };
        fetch('/joke', {
            method: "POST",
            body: JSON.stringify(msg),
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
            .catch(err => console.log('Fejl: ' + err));
    };
}