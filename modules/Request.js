

const urlParser = require('./urlParser');

const Request = {};

Request.process = (req) => {

    const trimmedPath = urlParser.getTrimmedPath(req);
    const queryStringObject = urlParser.getQueryStringObject(req);
    
    return {
        path: trimmedPath,
        method: req.method.toLowerCase(),
        queryString: queryStringObject,
        headers: req.headers,
    }

}

module.exports = Request;