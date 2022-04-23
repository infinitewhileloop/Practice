const log = console.log;
const fs = require('fs');
const path = require('path');

function getFilteredList(dirName, extension, callback) {
    fs.readdir(dirName, (err, files) => {
        if (err) return callback(err);
        const filtered = files.filter((file) => {
            if (path.extname(file) === '.' + extension) return true;
            else return false;
        });
        callback(null, filtered);
    });
}

module.exports = getFilteredList;
