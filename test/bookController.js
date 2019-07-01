const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const jwt = require('jsonwebtoken');
const config = require('../config.json');

const app = require('../server.js');

describe('#book', function() {

    let token;
    before(async () => {
		token = jwt.sign({ uid: 0, fname: 'test', lname: 'test' }, config.secret, { expiresIn: '1h' });
    });
    
    it('should return all books', function() {
        return chai.request(app)
        .get('/books')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

    it('should return book by id', function() {
        return chai.request(app)
        .get('/book/:id')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

});