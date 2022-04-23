'use strict';

const log = console.log;
const fs = require('fs');

const filePath = process.argv[2];

fs.access(filePath, (err) => {
    if (err) {
        log(`Path doesn't exist`);
        process.exit(1);
    }
});

fs.stat(filePath, (err, stats) => {
    if (err) {
        log('Error while executing stat');
        process.exit(1);
    }
    if (!stats.isFile()) {
        log(`Path doesn't lead to a file`);
        process.exit(1);
    }
});

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    log(data.split('\n').length - 1);
});
