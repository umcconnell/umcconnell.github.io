const anchor = require('markdown-it-anchor')
const { slugify } = require('../utils/markdown')

const config = { slugify }

module.exports = function anchorPlugin(md) {
    md.use(anchor, config)
}
