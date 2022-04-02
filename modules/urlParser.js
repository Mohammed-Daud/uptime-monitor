
const url = require('url');

const urlParser = {};

/**
 * @param {object} req
 * @returns {string}
 */
urlParser.getTrimmedPath = (req) => {

    const parsedPath = url.parse(req.url,true);
    const path = parsedPath.pathname;
    return path.replace('/^\/+|\/+$/g','');

}


module.exports = urlParser;