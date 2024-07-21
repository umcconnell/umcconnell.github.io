import toc from 'markdown-it-table-of-contents'
import { slugify } from '../../utils/markdown.js'

export default function tocPlugin(md) {
    md.use(toc, {
        includeLevel: [1, 2, 3],
        containerClass: 'table-of-contents',
        listType: 'ul',
        slugify,
        markerPattern: /^\[\[toc\]\]/im,
        // Hack: render the table of contents header as a markdown heading to get the correct styling
        //       but avoid including the heading in the table of contents itself. This requires toc
        //       to be added as last plugin.
        containerHeaderHtml: `<div class="toc-container-header">${md.render('## Table of contents')}<div>`
    })
}
