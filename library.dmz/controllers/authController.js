const request = require('request');
const baseurl = require('../config.json').baseurl;

const authenticate = (req, res, next) => {
    request({
        url: `${baseurl}/auth`,
        method: 'POST',
        json: req.body
    }, function (error, response, body) {
        res.json(body);
    });
};

module.exports = {authenticate};