
const http = require('http');
const stringDecoder = require('string_decoder').StringDecoder;
const Request = require('./modules/Request');

const server = http.createServer((req,res) => {

    const processedReq = Request.process(req);
    console.log('processedReq',processedReq);

    const decoder = new stringDecoder('utf-8');
    let buffer = '';
    req.on('data', (data) =>{
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        console.log('Payload of request is: ', buffer);
        processedReq.buffer = buffer;
        console.log('processedReq2',processedReq);
        res.end(`\n`);
    });

});

server.listen(3000, () => console.log('listening on port 3000'));


