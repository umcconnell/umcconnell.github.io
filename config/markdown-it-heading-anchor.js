const { shortcodes } = require('../utils/shortcodes.js')

module.exports = function externalLinks(
    md,
    { icon = shortcodes.icon('link') } = {}
) {
    let defaultRender = function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
    }

    md.renderer.rules.heading_close = function (
        tokens,
        idx,
        options,
        env,
        self
    ) {
        let openTag = idx
        let nestingLevel = 1

        // Find matching opening tag. Headings might be nested!
        while (nestingLevel > 0) {
            openTag--
            if (tokens[openTag].type == 'heading_open') {
                nestingLevel--
            } else if (tokens[openTag].type == 'heading_close') {
                nestingLevel++
            }
        }

        let anchor = tokens[openTag].attrGet('id')
        let tag = tokens[openTag].tag

        return `<a href="#${anchor}" class="anchor-link">${icon}</a></${tag}>`
    }
}
