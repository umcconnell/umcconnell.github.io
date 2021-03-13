const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const markdownIt = require('./config/markdown-it')

const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')
const { shortcodes, pairedShortcodes } = require('./utils/shortcodes.js')
const iconsprite = require('./utils/iconsprite.js')

module.exports = function (config) {
    // Plugins
    config.addPlugin(pluginRss)
    config.addPlugin(pluginNavigation)
    config.addPlugin(pluginSyntaxHighlight)

    // Filters
    Object.keys(filters).forEach((name) => {
        config.addFilter(name, filters[name])
    })

    // Transforms
    Object.keys(transforms).forEach((name) => {
        config.addTransform(name, transforms[name])
    })

    // Shortcodes
    Object.keys(shortcodes).forEach((name) => {
        config.addShortcode(name, shortcodes[name])
    })

    Object.keys(pairedShortcodes).forEach((name) => {
        config.addPairedShortcode(name, pairedShortcodes[name])
    })

    // Icon Sprite
    config.addNunjucksAsyncShortcode('iconsprite', iconsprite)

    // Asset Watch Targets
    config.addWatchTarget('./src/assets')

    // Markdown
    config.setLibrary('md', markdownIt)

    // Layouts
    config.addLayoutAlias('base', 'base.njk')
    config.addLayoutAlias('post', 'post.njk')

    // Pass-through files
    config.addPassthroughCopy('src/robots.txt')
    config.addPassthroughCopy('src/404.html')
    config.addPassthroughCopy('src/site.webmanifest')
    config.addPassthroughCopy('src/assets/images')
    config.addPassthroughCopy('src/assets/fonts')
    config.addPassthroughCopy('src/assets/other')

    // Deep-Merge
    config.setDataDeepMerge(true)

    if (process.env.ELEVENTY_ENV == 'development') {
        // Copy images in post drafts
        config.addPassthroughCopy('src/posts/drafts/**/*.jpg')
        config.addPassthroughCopy('src/posts/drafts/**/*.png')
        config.addPassthroughCopy('src/posts/drafts/**/*.svg')

        // Ignore .gitignore in development mode to serve post drafts
        config.setUseGitIgnore(false)
    }

    // Base Config
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        // When hosting with a path prefix:
        // pathPrefix: process.env.ELEVENTY_ENV === 'production' ? 'lorem' : '',
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}
