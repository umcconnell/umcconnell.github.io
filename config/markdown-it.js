const markdownIt = require('markdown-it')

const katex = require('@iktakahiro/markdown-it-katex')
const katexConfig = require('./katex')

const anchor = require('markdown-it-anchor')
const anchorConfig = require('./markdown-it-anchor')

const footnote = require('./markdown-it-footnote')

let externalLinks = require('./markdown-it-external-link')
let anchorLink = require('./markdown-it-anchor-link')

const config = {
    html: true,
    //breaks: true,
    linkify: true,
    typographer: true
}

const md = markdownIt(config)
    .use(footnote)
    .use(katex, katexConfig)
    .use(anchor, anchorConfig)
    .use(externalLinks)
    .use(anchorLink)

module.exports = md
