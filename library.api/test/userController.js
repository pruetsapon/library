const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const jwt = require('jsonwebtoken');
const config = require('../app/configs/config').auth;
const role = require('../app/common/role');

const server = require('../server.js');

describe('#user', function() {

    let token;
    before(async () => {
		token = jwt.sign({ uid: 0, fname: 'test', lname: 'test', role: role.admin }, config.secret, { expiresIn: '1h' });
    });
    
    it('should return all users', function() {
        return chai.request(server)
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });

    it('should return book by id', function() {
        return chai.request(server)
        .get('/user/1')
        .set('Authorization', `Bearer ${token}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
        });
    });
});