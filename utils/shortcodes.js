const msgIcon = (type) => {
    switch (type) {
        case 'warn':
        case 'danger':
        case 'alert':
            return 'alert'
        case 'sucess':
            return 'check-circle'
        case 'info':
        default:
            return 'info'
    }
}

export const shortcodes = {
    icon: function (name) {
        return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
        <use xlink:href="#icon-${name}"></use>
        </svg>`
    },

    // Inspired by https://css-tricks.com/lazy-load-embedded-youtube-videos/
    ytvideo: function (
        id,
        title = 'Embedded Youtube Video. Click to play.',
        thumbnail_type = 'hqdefault',
        width = 560,
        height = 315
    ) {
        let video = `https://www.youtube-nocookie.com/embed/${id}`
        let thumbnail = `https://img.youtube.com/vi/${id}/${thumbnail_type}.jpg`
        let preview = `<style>
                * {
                    padding: 0;
                    margin: 0;
                    overflow: hidden;
                }

                html,body {
                    height: 100%;
                }
                
                img,span {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
                
                span {
                    display: flex;
                    background-color: rgba(51, 51, 51, 40%);
                    align-items: center;
                    justify-content: center;
                    font: 48px/1.5 sans-serif;
                    color: white;
                    text-shadow: 0 0 1em black;
                }
            </style>
            <a href='${video}?autoplay=1'>
                <img src='${thumbnail}' alt='${title}'><span>▶</span>
            </a>`.replace(/\n\s/g, '')

        return `<iframe class="video yt-video"
                 width="${width}" height="${height}" src="${video}"
                 srcdoc="${preview}" frameborder="0"
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen title="${title}" loading="lazy"
                ></iframe>`
    }
}

export const pairedShortcodes = {
    msg: function (content, type = 'info', show_header = true, title) {
        return `<div class="msg msg--${type}">
        ${
            show_header
                ? `<div class="msg__header">${
                      title ? title : type.toUpperCase()
                  }</div>`
                : ''
        }${content}</div>`
    },
    details: function (content, summary = 'More details...') {
        return `<details><summary>${summary}</summary>${content}</details>`
    }
}
