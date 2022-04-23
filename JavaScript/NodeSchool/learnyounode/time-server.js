const net = require('net');
const log = console.log;

const port = process.argv[2];

const server = net.createServer((socket) => {
    const fmtDate = new Date().toLocaleString('sv-SE').slice(0, 16) + '\n';
    socket.write(fmtDate);
    socket.end();
});
server.listen(port);
