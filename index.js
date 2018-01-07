'use strict';
const fs = require('fs');
const ghRepoHasLicense = require('gh-repo-has-license');

module.exports = path => {
    return new Promise((resolve, reject) => {
        if (path.includes('github.com')) {
            // Check if the license file exists at the GitHub repository
            ghRepoHasLicense(path).then(result => {
                resolve(result);
            });
        } else {
            // Check if the license file exists with `fs.access()`
            fs.access(path + '/license', 'utf8', (err, data) => {
                if (err) {
                    resolve(false);
                }
                resolve(true);
            });
        }
    });
};