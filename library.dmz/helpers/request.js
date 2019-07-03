const rq = require('request-promise');
const baseurl = require('../config.json').baseurl;


const request = async ({url, method, body, headers}) => {
    var options = {
        method: method,
        uri: `${baseurl}${url}`,
        body: body,
        json: true,
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${headers.tokenkey}`
        }
    };
     
    return await rq(options);
}

module.exports = {request};