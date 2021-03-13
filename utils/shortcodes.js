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

const shortcodes = {
    icon: function (name) {
        return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
        <use xlink:href="#icon-${name}"></use>
        </svg>`
    }
}

const pairedShortcodes = {
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

module.exports.shortcodes = shortcodes
module.exports.pairedShortcodes = pairedShortcodes
