import { taglist } from './taglist.js'

// Description: These components can be used in both JavaScript and
// Nunjucks templates. This allows for static rendering with Nunjucks at
// compile-time or dynamic rendering with JavaScript during runtime of
// the same component. All components defined in this folder will be
// imported and added as shortcodes in the Eleventy config.

function htmlEscape(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/`/g, '&#96;')
}

export const card = (title, link, description, cssClass = '') =>
    `<div class="card ${cssClass}">
        <h2 class="card__title">
            <a href="${link}">${title}</a>
        </h2>
        <p class="card__description">${description}</p>
    </div>`

export const postcard = (url, title, date, description, tags, cssClass = '') =>
    `<div class="card card--post ${cssClass}">
        <h2 class="card__title"><a href="${url}">${title}</a></h2>
        <strong class="card--post__date">${date}</strong>
        <p class="card__description">${description}</p>
        ${taglist(tags, 'card--post__taglist')}
    </div>`
