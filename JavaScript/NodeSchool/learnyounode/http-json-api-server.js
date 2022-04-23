const http = require('http');
const url = require('url');
const log = console.log;

const port = process.argv[2];
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const queryStr = url.parse(req.url, true).query;
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let output = '';
        if (req.url.startsWith('/api/parsetime')) {
            output = getJsonHumanDate(queryStr.iso);
        } else if (req.url.startsWith('/api/unixtime')) {
            output = getJsonUnixDate(queryStr.iso);
        }

        res.write(output);
        res.end();
    }
});
server.listen(port);

function getJsonHumanDate(isoDate) {
    const date = new Date(isoDate).toLocaleTimeString('sv-SE'); // 22:48:48, in local time zone
    const [hr, min, sec] = date.split(':');
    const obj = { hour: +hr, minute: +min, second: +sec };
    log(obj);
    return JSON.stringify(obj);
}

function getJsonUnixDate(isoDate) {
    const obj = { unixtime: new Date(isoDate).getTime() };
    return JSON.stringify(obj);
}
