const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const fs = require('fs');

const pathname = '/Users/Corentin/Downloads/';
const folder = 'testBot/';
const filename = 'count.txt';

function doCommits(NB_COMMIT, COMMIT_MESSAGE) {
    exec('git status', {
        cwd: `${pathname}${folder}`
    }, (error, stdout, stderr) => {
        for (let i = 0; i < NB_COMMIT; i++) {
            fs.appendFileSync(`${pathname}${folder}${filename}`, `Commit ${i} \n`);
            execSync(`git add . && git commit -m ${COMMIT_MESSAGE}`, {
                cwd: `${pathname}${folder}`
            }, (error, stdout, stderr) => {});
        }
        execSync(`git push`, {
            cwd: `${pathname}${folder}`
        }, (error, stdout, stderr) => {});
    });
}

module.exports = {
    doCommits
};