const users = require('../data/user');

class bookRepository {
    constructor() {}
    getUsers() {
        return users;
    }
    getUserById(id) {
        return users.find(user => user.id === id);
    }
}

module.exports = new bookRepository();