
const url = require('url');

const urlParser = {};

/**
 * @param {object} req
 * @returns {string}
 */
urlParser.getTrimmedPath = (req) => {

    const parsedPath = url.parse(req.url,true);
    const path = parsedPath.pathname;
    const regex = /^\/+|\/+$/g;
    return path.replace(regex,'');

}

/**
 * @param {object} req
 * @returns {object}
 */
urlParser.getQueryStringObject = (req) => url.parse(req.url,true).query;



module.exports = urlParser;