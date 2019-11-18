const config = {
   // localMongoDB: 'mongodb://localhost',
    'mongoDBhost': 'mongodb+srv://LouiseHelene:admin123@cluster1-u2ygp.mongodb.net/?authSource=admin',
    'port': process.env.PORT || 8080
    /* Automatisk registrering på jokeregistry
    'register': register = {
        'name': "",
        'address': "https://jokeservice2019.herokuapp.com/",
        'secret': ""
    }
    */
};
/*
config.unregister = {
    'address': "https://jokeservice2019.herokuapp.com/",
    'secret': ""
};
*/
module.exports = config; // For tests