'use strict';
const log = console.log;
const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    let html = '';
    res.on('data', (chunk) => {
        html += chunk;
    });
    res.on('end', () => {
        log(html.length);
        log(html);
    });
});
