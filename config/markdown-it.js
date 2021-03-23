const markdownIt = require('markdown-it')

const katex = require('@iktakahiro/markdown-it-katex')
const katexConfig = require('./katex')

const anchor = require('markdown-it-anchor')
const anchorConfig = require('./markdown-it-anchor')

let externalLinks = require('./markdown-it-external-link')
let headingAnchor = require('./markdown-it-heading-anchor')

const config = {
    html: true,
    //breaks: true,
    linkify: true,
    typographer: true
}

const md = markdownIt(config)
    .use(katex, katexConfig)
    .use(anchor, anchorConfig)
    .use(externalLinks)
    .use(headingAnchor)

module.exports = md
