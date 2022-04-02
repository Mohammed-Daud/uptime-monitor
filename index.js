const http = require('http');
const urlParser = require('./modules/urlParser');

const server = http.createServer((req,res) => {
    const trimmedPath = urlParser.getTrimmedPath(req);
    console.log(`Trimmed path is ${trimmedPath}.`);
    res.end(`\n`);
});

server.listen(3000, () => console.log('listening on port 3000'));

