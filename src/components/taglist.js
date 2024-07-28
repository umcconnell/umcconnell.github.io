export const taglist = (list, cssClass = '', start = 1) =>
    `<ul class="taglist ${cssClass}">
        ${list
            .slice(start)
            .map(
                (tag) =>
                    `<li class="taglist__tag"><a href="/posts/tags/${tag}">#${tag}</a></li>`
            )
            .join('')}
    </ul> `
