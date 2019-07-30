const exjwt = require('express-jwt');
const config = require('../configs/config');
const { secret } = config.auth;

const verify = () => {
    return exjwt({ secret }).unless({
        // public routes that don't require authentication
        path: [
            { url: '/auth', methods: ['POST']  }
        ]
    });
}

module.exports = verify;