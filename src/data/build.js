const { execSync } = require('child_process')

function getCurrentCommit(short = false) {
    return execSync(`git rev-parse ${short ? '--short' : ''} HEAD`, {
        cwd: __dirname
    })
        .toString()
        .trim()
}

module.exports = {
    env: process.env.ELEVENTY_ENV,
    timestamp: new Date(),
    gitCommitHash: getCurrentCommit(),
    gitCommitHashShort: getCurrentCommit(true)
}
