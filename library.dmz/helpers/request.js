const rq = require('request-promise');
const baseurl = require('../config.json').api_url;

const header = (tokenkey) => {
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

const get = async ({url, headers}) => {
    var options = {
        method: 'GET',
        uri: `${baseurl}${url}`,
        json: true,
        headers: header(headers.tokenkey)
    };
    return await rq(options);
}

const post = async ({url, body, headers}) => {
    var options = {
        method: 'POST',
        uri: `${baseurl}${url}`,
        body: body,
        json: true,
        headers: header(headers.tokenkey)
    };
    return await rq(options);
}

const put = async ({url, body, headers}) => {
    var options = {
        method: 'PUT',
        uri: `${baseurl}${url}`,
        body: body,
        json: true,
        headers: header(headers.tokenkey)
    };
    return await rq(options);
}

const del = async ({url, headers}) => {
    var options = {
        method: 'DELETE',
        uri: `${baseurl}${url}`,
        json: true,
        headers: header(headers.tokenkey)
    };
    return await rq(options);
}

module.exports = {get,post,put,del};