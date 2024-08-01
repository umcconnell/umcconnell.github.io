import { shortcodes } from '#utils/shortcodes.js'

export default function externalLinks(
    md,
    { icon = shortcodes.icon('link-external') } = {}
) {
    let defaultRender = function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
    }

    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        let curr = tokens[idx]

        // If you are sure other plugins can't add `target` - drop check below
        let targetIndex = curr.attrIndex('target')
        let relIndex = curr.attrIndex('rel')

        // Skip internal links
        let href = curr.attrGet('href')
        if (href && !href.startsWith('http')) {
            return defaultRender(tokens, idx, options, env, self)
        }

        if (targetIndex < 0) {
            curr.attrPush(['target', '_blank']) // add new attribute
        } else {
            curr.attrs[targetIndex][1] = '_blank' // replace value of existing attr
        }

        if (relIndex < 0) {
            curr.attrPush(['rel', 'noopener noreferrer'])
        } else {
            curr.attrs[relIndex][1] = 'noopener noreferrer'
        }

        return defaultRender(tokens, idx, options, env, self)
    }

    md.renderer.rules.link_close = function (tokens, idx, options, env, self) {
        let openTag = idx
        let nestingLevel = 1

        // Find matching opening tag. Links might be nested!
        while (nestingLevel > 0) {
            openTag--
            if (tokens[openTag].type == 'link_open') {
                nestingLevel--
            } else if (tokens[openTag].type == 'link_close') {
                nestingLevel++
            }
        }

        // Skip internal links
        let href = tokens[openTag].attrGet('href')
        if (href && !href.startsWith('http')) {
            return defaultRender(tokens, idx, options, env, self)
        }

        // Add external link icon before closing the link
        return `${icon}</a>`
    }
}
