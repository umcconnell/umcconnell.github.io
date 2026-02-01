import { DateTime } from 'luxon'

export function dateToFormat(date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format))
}
export function dateToISO(date) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
        includeOffset: false,
        suppressMilliseconds: true
    })
}
export function dateLong(date) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('MMMM dd, yyyy')
}
export function obfuscate(str) {
    const chars = []
    for (var i = str.length - 1; i >= 0; i--) {
        chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
    }
    return chars.join('')
}
export function take(arr, amount) {
    return arr.slice(0, amount)
}
export function enumerate(arr) {
    return arr.map((val, i) => [val, i])
}
export function sourceRepo(path) {
    return `${this.ctx.meta.code.repo}/tree/${this.ctx.meta.code.branch}/${path}`
}

/**
 * Decode HTML entities in a string
 */
function decodeHtmlEntities(str) {
    const entities = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&apos;': "'",
        '&nbsp;': ' '
    }
    return str.replace(
        /&(?:amp|lt|gt|quot|apos|nbsp|#39);/g,
        (match) => entities[match] || match
    )
}

/**
 * Extract table of contents from HTML content
 * Returns an array of heading objects with id, text, and level
 */
export function extractToc(content) {
    if (!content) return []

    const headingRegex = /<h([2-3])\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/h[2-3]>/gi
    const headings = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1], 10)
        const id = match[2]
        // Strip HTML tags, decode entities, and get text content
        const text = decodeHtmlEntities(match[3].replace(/<[^>]*>/g, '').trim())

        headings.push({ level, id, text })
    }

    return headings
}

export function countTags(posts) {
    const counts = {}
    const excludedTags = ['all', 'posts']

    posts.forEach((post) => {
        if (post.data.tags) {
            const tags =
                typeof post.data.tags === 'string'
                    ? [post.data.tags]
                    : post.data.tags
            tags.forEach((tag) => {
                if (!excludedTags.includes(tag)) {
                    counts[tag] = (counts[tag] || 0) + 1
                }
            })
        }
    })
    // Convert to array and sort by count desc, then name asc
    return Object.entries(counts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => {
            const diff = b.count - a.count
            if (diff !== 0) return diff
            return a.name.localeCompare(b.name)
        })
}

export function countYears(posts) {
    const counts = {}
    posts.forEach((post) => {
        const year = new Date(post.date).getFullYear()
        counts[year] = (counts[year] || 0) + 1
    })
    return Object.entries(counts)
        .map(([year, count]) => ({ year, count }))
        .sort((a, b) => b.year - a.year)
}
