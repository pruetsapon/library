const request = require('request');
const baseurl = require('../config.json').baseurl;

const getBooks = (req, res) => {
    request({
        url: `${baseurl}/books`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${req.headers.authorization}`
        }
    }, function (error, response, body) {
        res.json(JSON.parse(body));
    });
};
const getBookById = (req, res) => {
    request({
        url: `${baseurl}/book/${req.params.id}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${req.headers.authorization}`
        }
    }, function (error, response, body) {
        res.json(JSON.parse(body));
    });
};

module.exports = {getBooks, getBookById};