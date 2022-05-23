const jwt = require('jsonwebtoken');
const config = require('../configs/config').auth;

class AuthService {
    constructor(mongoose) {
        this.mongoose = mongoose;
        this.User = this.mongoose.model('User');
    }

    async auth({ username, password }) {
        const user = await this.User.findOne({username: username, password: password});
        if (user) {
            const token = jwt.sign({ uid: user.userId, fname: user.firstname, lname: user.lastname, role: user.role }, config.secret, { expiresIn: config.expiresIn });
            let { userId, firstname, lastname } = user;
            return { 
                userId,
                firstname,
                lastname,
                token
            };
        }
        return { message: 'username and password incorrect' };
    }
}

module.exports = AuthService;