const exjwt = require('express-jwt');
const config = require('../config.json');

const verify = () => {
    const { secret } = config;
    return exjwt({ secret }).unless({
        // public routes that don't require authentication
        path: [
            '/auth'
        ]
    });
}

module.exports = verify;