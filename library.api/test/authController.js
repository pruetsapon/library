const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const server = require('../server.js');

describe('#auth', function() {

    describe('Autherized', function() {
        it('request token', function() {
            return chai.request(server)
            .post('/auth')
            .send({username:"pruetsapon", password:"123456789"})
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            });
        });
        it('request token when incorrect username or password', function() {
            return chai.request(server)
            .post('/auth')
            .send({username:"test", password:"test"})
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            });
        });
    });

    describe('Unautherized', function() {
        it('request api when unautherized', function() {
            return chai.request(server)
            .get('/auth')
            .then(function(res) {
                expect(res).to.have.status(401);
                expect(res).to.be.json;
            });
        });
    });
    
});