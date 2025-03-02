import markdownIt from 'markdown-it'

import katex from './markdown-it/katex.js'
import anchor from './markdown-it/anchor.js'
import footnote from './markdown-it/footnote.js'
import toc from './markdown-it/toc.js'

import externalLinks from './markdown-it/external-link.js'
import anchorLink from './markdown-it/anchor-link.js'
import codeLangLabels from './markdown-it/codeLangLabel.js'

const config = {
    html: true,
    //breaks: true,
    linkify: true,
    typographer: true
}

const md = markdownIt(config)
    .use(footnote)
    .use(katex)
    .use(codeLangLabels)
    .use(anchor)
    .use(externalLinks)
    .use(anchorLink)
    .use(toc)

export default md
