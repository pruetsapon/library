const rq = require('request-promise');
const config = require('../configs/config').api;

const header = ({ tokenkey }) => {
    let header = {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'Content-Type': 'application/json'
    };
    if(tokenkey != undefined) {
        header.Authorization = `Bearer ${tokenkey}`;
    }
    return header;
}

class Request {
    constructor() {}
    async get({url, headers}) {
        var options = {
            method: 'GET',
            uri: `${config.url}${url}`,
            json: true,
            headers: header(headers)
        };
        return await rq(options);
    }
    
    async post({url, body, headers}) {
        var options = {
            method: 'POST',
            uri: `${config.url}${url}`,
            body: body,
            json: true,
            headers: header(headers)
        };
        return await rq(options);
    }
    
    async put({url, body, headers}) {
        var options = {
            method: 'PUT',
            uri: `${config.url}${url}`,
            body: body,
            json: true,
            headers: header(headers)
        };
        return await rq(options);
    }
    
    async delete({url, headers}) {
        var options = {
            method: 'DELETE',
            uri: `${config.url}${url}`,
            json: true,
            headers: header(headers)
        };
        return await rq(options);
    }
}

module.exports = Request;