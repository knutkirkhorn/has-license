'use strict';
const fs = require('fs');

module.exports = path => {
    //TODO: check if url => check if contains:github.com

    // Checks if the license file exists with `fs.access()`
    return new Promise((resolve, reject) => {
        fs.access(path + '/license', 'utf8', (err, data) => {
            if (err) {
                resolve(false);
            }
            resolve(true);
        });
    });
};