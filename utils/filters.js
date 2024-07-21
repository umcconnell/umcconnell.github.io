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
