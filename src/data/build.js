import { execSync } from 'child_process'

function getCurrentCommit(short = false) {
    return execSync(`git rev-parse ${short ? '--short' : ''} HEAD`, {
        cwd: import.meta.dirname
    })
        .toString()
        .trim()
}

export const env = process.env.ELEVENTY_ENV
export const timestamp = new Date()
export const gitCommitHash = getCurrentCommit()
export const gitCommitHashShort = getCurrentCommit(true)
