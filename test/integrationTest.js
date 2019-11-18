const app = require('../app.js');
const controller = require('../controllers/jokesApiController');
const request = require('supertest');
const should = require('should');
/*
describe('integration test - promise', function () {
    it("get('/') test", function ()  {
        return request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/);
    });

    it("get('/api/jokes') test", function () {
        return request(app)
            .get('/api/jokes')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(function (response) {
                response[0].setup.should.be.equal('Where does the king keep his armies?');
                response[1].punchline.should.be.equal("Don't look! I'm about to change!");
            });
    });

    it("get('/api/othersites') test", function () {
        return request(app)
            .get('/api/othersites')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(function (response) {
                response.body.length.should.be.greaterThanOrEqual(20);
                response.body[0].name.should.be.equal('Epic memers');
                response.body[3].name.should.be.equal('jokerjokes');
            });
    });
/*
    it("get('/api/otherjokes/:site') test", function () {
        return request(app)
            .get('/api/otherjokes/:site')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(function (response) {

            });
    });
*
    it("post('/api/jokes') test", function () {
        return request(app)
            .post('/api/jokes')
            .send({
                'setup': 'Integration -',
                'punchline': 'Test!'
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(200)
            .then(function (response) {
                response.body.message.should.be.equal('Joke saved!');
                return controller.getJokes();
            })
            .then(function(response) {
                response.length.should.be.greaterThanOrEqual(12);
                response[12].punchline.should.be.equal('Test!');
            });
    });
});

*/