
const http = require('http');
const stringDecoder = require('string_decoder').StringDecoder;
const Request = require('./modules/Request');
const Router = require('./modules/Router');
const Handlers = require('./modules/Handlers');





const server = http.createServer((req,res) => {

    const processedReq = Request.process(req);
    // console.log('processedReq',processedReq);

    const decoder = new stringDecoder('utf-8');
    let buffer = '';
    req.on('data', (data) =>{
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();
        // console.log('Payload of request is: ', buffer);
        processedReq.buffer = buffer;
        // console.log('processedReq2',processedReq);
        //if path avlable in router
        const redirectTo = typeof(Router[processedReq.path]) === 'undefined' ? Handlers.notFound : Router[processedReq.path];

        redirectTo(processedReq,(statusCode, payload) => {

            // if we get status code from callback
            statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
            payload = typeof(payload) === 'object' ? payload : {};
            const payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString);
            
        });

        
        
    });

});

server.listen(3000, () => console.log('listening on port 3000'));


