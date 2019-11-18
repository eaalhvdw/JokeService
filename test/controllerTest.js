const app = require('../app.js');
const controller = require('../controllers/jokesApiController');
const should = require('should');
/*
describe('controller test - promise', function () {
    it('getJokes test', function () {
        return controller.getJokes()
            .then(function (response) {
                response.length.should.be.greaterThanOrEqual(2);
                response[0].setup.should.be.equal('Where does the king keep his armies?');
                response[1].punchline.should.be.equal("Don't look! I'm about to change!");
                return true;
            }
        );
    });
});

*/