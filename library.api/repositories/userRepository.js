const User = require('../models/userModel');

class bookRepository {

    constructor() {}

    getUsers() {
        return User.find().exec();
    }

    getUserById(id) {
        return User.findOne({bookId: id}).exec();
    }
    
}

module.exports = new bookRepository();