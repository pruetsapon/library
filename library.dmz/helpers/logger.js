const winston = require('winston');
const expressWinston = require('express-winston');
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
const dateFormat = require('dateformat');

const option = () => {
    const date = dateFormat(new Date(), "yyyy-mm-dd");
    return {
        level: 'info',
        transports: [
            new winston.transports.Console({
                json: true,
                colorize: true
            }),
            new winston.transports.File({
                filename: `./logs/${date}.log`
            })
        ],
        exitOnError: false
    };
}

const logger = () => {
    return expressWinston.logger(option());
}

const errorLogger = () => {
    return expressWinston.errorLogger(option());
}

module.exports = {logger, errorLogger};