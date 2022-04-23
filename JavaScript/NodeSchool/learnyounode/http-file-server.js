const fs = require('fs');
const http = require('http');
const log = console.log;

const [port, filePath] = process.argv.slice(2);

const server = http.createServer((req, res) => {
    const fileInput = fs.createReadStream(filePath);
    fileInput.pipe(res);
});
server.listen(port);
