import fs from 'fs'

import pluginRss from '@11ty/eleventy-plugin-rss'
import pluginNavigation from '@11ty/eleventy-navigation'
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'

import markdownIt from './config/markdown-it.js'

import * as filters from './utils/filters.js'
import * as transforms from './utils/transforms.js'
import { shortcodes, pairedShortcodes } from './utils/shortcodes.js'
import iconsprite from './utils/iconsprite.js'

export default async function (config) {
    // Plugins
    config.addPlugin(pluginRss)
    config.addPlugin(pluginNavigation)
    config.addPlugin(pluginSyntaxHighlight)

    // Collections
    config.addCollection('allTagsAndYears', function (collectionApi) {
        const posts = collectionApi.getFilteredByTag('posts')
        const tagsMap = new Map()

        posts.forEach((post) => {
            // Handle regular tags
            const tags = post.data.tags || []
            const tagArray = typeof tags === 'string' ? [tags] : tags
            tagArray.forEach((tag) => {
                if (!tagsMap.has(tag)) tagsMap.set(tag, [])
                tagsMap.get(tag).push(post)
            })

            // Handle year
            if (post.date) {
                const year = post.date.getFullYear().toString()
                if (!tagsMap.has(year)) tagsMap.set(year, [])
                // Avoid duplicates if year is already a tag
                if (!tagArray.includes(year)) {
                    tagsMap.get(year).push(post)
                }
            }
        })

        return Array.from(tagsMap.entries()).map(([tag, posts]) => {
            return {
                tagName: tag,
                posts: posts
            }
        })
    })

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

    // Dynamically import all .js files in components/ and add them as shortcodes
    const components = fs.readdirSync('./src/components/')
    for (const component of components) {
        if (component.endsWith('.js')) {
            const shortcodes = await import(`./src/components/${component}`)
            Object.keys(shortcodes).forEach((name) => {
                config.addShortcode(name, shortcodes[name])
            })
        }
    }

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

        config.addWatchTarget('src/posts/drafts/')

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
