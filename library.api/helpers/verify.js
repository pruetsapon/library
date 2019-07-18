const exjwt = require('express-jwt');
const config = require('../config.json');
const { secret } = config;

const verify = () => {
    return exjwt({ secret }).unless({
        // public routes that don't require authentication
        path: [
            { url: '/api/v1/auth', methods: ['POST']  }
        ]
    });
}

module.exports = verify;