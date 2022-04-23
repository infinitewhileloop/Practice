const http = require('http');
const log = console.log;

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
    let inputStr = '';
    req.on('data', (chunk) => (inputStr += chunk));
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(inputStr.toUpperCase());
    });
});
server.listen(port);
