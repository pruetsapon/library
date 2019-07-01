const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const app = require('../server.js');

describe('#auth', function() {

    describe('Autherized', function() {
        it('request token', function() {
            return chai.request(app)
            .post('/auth')
            .send({username:"pruetsapon", password:"123456789"})
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            });
        });
        it('request token when incorrect username or password', function() {
            return chai.request(app)
            .post('/auth')
            .send({username:"pruetsapon", password:"1234567890"})
            .then(function(res) {
                expect(res).to.have.status(400);
                expect(res).to.be.json;
            });
        });
    });

    describe('Unautherized', function() {
        it('request api when unautherized', function() {
            return chai.request(app)
            .get('/auth')
            .then(function(res) {
                expect(res).to.have.status(401);
                expect(res).to.be.json;
            });
        });
    });
    
});