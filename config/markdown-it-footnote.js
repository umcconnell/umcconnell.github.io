const footnote = require('markdown-it-footnote')

module.exports = function footnotePlugin(md) {
    md.use(footnote)

    md.renderer.rules.footnote_block_open = function () {
        // Re-render to get anchor links
        return md.render(
            '<hr class="footnotes-sep">\n\n' +
                '## References\n' +
                '<section class="footnotes">\n' +
                '<ol class="footnotes-list">\n'
        )
    }
}
