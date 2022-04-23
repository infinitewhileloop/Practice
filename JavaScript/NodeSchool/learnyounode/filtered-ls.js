'use strict';

const fs = require('fs');
const log = console.log;

const [dirName, extension] = process.argv.slice(3);

fs.readdir(dirName, (err, files) => {
    if (err) throw err;
    const filtered = files.filter((file) => file.endsWith(`.${extension}`));
    filtered.forEach((file) => log(file));
});
