const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const jwt = require('jsonwebtoken');
const config = require('../app/configs/config').auth;
const role = require('../app/common/role');

const server = require('../server.js');

describe('#book', function() {

    let token;
    before(async () => {
		token = jwt.sign({ uid: 0, fname: 'test', lname: 'test', role: role.user }, config.secret, { expiresIn: '1h' });
    });
    
    it('should return all books', function() {
        return chai.request(server)
        .get('/books')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

    it('should return book by id', function() {
        return chai.request(server)
        .get('/book/1')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

    it('should create book', function() {
        return chai.request(server)
        .post('/book')
        .set('Authorization', `Bearer ${token}`)
        .send({bookId: 0, name: "test"})
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

    it('should update book by id', function() {
        return chai.request(server)
        .put('/book/0')
        .set('Authorization', `Bearer ${token}`)
        .send({bookId: 0, name: "test test"})
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

    it('should delete book by id', function() {
        return chai.request(server)
        .delete('/book/0')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

});