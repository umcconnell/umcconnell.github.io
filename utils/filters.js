const { DateTime } = require('luxon')

module.exports = {
    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    dateLong: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            'MMMM dd, yyyy'
        )
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    take: function (arr, amount) {
        return arr.slice(0, amount)
    },

    enumerate: function (arr) {
        console.log('Enumerating', arr[0])
        return arr.map((val, i) => [val, i])
    },

    sourceRepo: function (path) {
        return `${this.ctx.meta.code.repo}/tree/${this.ctx.meta.code.branch}/${path}`
    }
}
