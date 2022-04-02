
const http = require('http');
const urlParser = require('./modules/urlParser');

const server = http.createServer((req,res) => {
    const trimmedPath = urlParser.getTrimmedPath(req);
    const method = req.method.toLowerCase();
    console.log(`Method is ${method}.`);
    const queryStringObject = urlParser.getQueryStringObject(req);
    console.log('queryStringObject:',queryStringObject);
    const headers = req.headers;
    console.log('headers:',headers);
    res.end(`\n`);
});

server.listen(3000, () => console.log('listening on port 3000'));

