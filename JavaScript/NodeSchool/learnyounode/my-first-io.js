'use strict';
const log = console.log;
const fs = require('fs');

const file = process.argv[2];

let data;
try {
    data = fs.readFileSync(file, 'utf8');
} catch (err) {
    log('Error occurred while reading file');
    process.exit(1);
}

const numOfNewlines = (data.match(/\n/g) || []).length;
log(numOfNewlines);
