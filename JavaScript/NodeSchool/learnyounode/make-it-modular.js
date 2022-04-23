'use strict';
const log = console.log;
const getList = require('./mymodule.js');

const dirName = process.argv[2];
const extension = process.argv[3];

getList(dirName, extension, (err, files) => {
    if (err) return log('Oopsie', err);
    files.forEach((file) => log(file));
});
