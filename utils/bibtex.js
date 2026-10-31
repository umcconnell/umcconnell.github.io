// Minimal BibTeX parser: enough for a hand-maintained publication list.
// Supports @type{key, field = {braced} | "quoted" | bare, ...}, nested braces,
// @comment/@preamble/@string skipping, and common LaTeX accents.

const ACCENTS = {
    '"': '̈', // umlaut
    "'": '́', // acute
    '`': '̀', // grave
    '^': '̂', // circumflex
    '~': '̃', // tilde
    '=': '̄', // macron
    '.': '̇', // dot above
    c: '̧', // cedilla
    v: '̌', // caron
    u: '̆', // breve
    H: '̋', // double acute
    k: '̨' // ogonek
}

const SYMBOLS = {
    ss: 'ß',
    o: 'ø',
    O: 'Ø',
    ae: 'æ',
    AE: 'Æ',
    oe: 'œ',
    OE: 'Œ',
    aa: 'å',
    AA: 'Å',
    l: 'ł',
    L: 'Ł',
    i: 'ı',
    j: 'ȷ'
}

export function latexToUnicode(str) {
    return (
        str
            // Accents: \"o, \"{o}, {\"o}, \c{c}, \v{s}, ...
            .replace(
                /\\(["'`^~=.]|[cvuHk](?=[{\s]))\s*(?:\{(\\?[a-zA-Z])\}|(\\?[a-zA-Z]))/g,
                (_, acc, a, b) => {
                    let base = a || b
                    if (base.startsWith('\\'))
                        base = SYMBOLS[base.slice(1)] || base.slice(1)
                    return (base + ACCENTS[acc]).normalize('NFC')
                }
            )
            // Symbols: \ss, \o, \ae, ...
            .replace(
                /\\(ss|ae|AE|oe|OE|aa|AA|[oOlLij])(?![a-zA-Z])\s?/g,
                (_, s) => SYMBOLS[s]
            )
            .replace(/\\&/g, '&')
            .replace(/--/g, '–')
            .replace(/~/g, ' ')
            // Strip remaining grouping braces
            .replace(/[{}]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
    )
}

// "Last, First" or "First Last" -> "First Last"
function formatName(name) {
    const parts = name.split(',').map((p) => p.trim())
    return parts.length > 1
        ? `${parts.slice(1).join(' ')} ${parts[0]}`
        : parts[0]
}

export function parseAuthors(value) {
    return value
        .split(/\s+and\s+/)
        .map((a) => latexToUnicode(formatName(a)))
        .filter(Boolean)
}

export function parseBibtex(src) {
    const entries = []
    let i = 0

    const skipWs = () => {
        while (i < src.length && /\s/.test(src[i])) i++
    }

    // Read a balanced {...} group starting at src[i] === '{' (or '(')
    const readGroup = () => {
        const open = src[i]
        const close = open === '(' ? ')' : '}'
        let depth = 0
        const start = i
        for (; i < src.length; i++) {
            if (src[i] === '\\') {
                i++
                continue
            }
            if (src[i] === open) depth++
            else if (src[i] === close && --depth === 0)
                return src.slice(start + 1, i++)
        }
        throw new Error('Unbalanced braces in BibTeX')
    }

    const readValue = () => {
        skipWs()
        if (src[i] === '{') return readGroup()
        if (src[i] === '"') {
            let depth = 0
            const start = ++i
            for (; i < src.length; i++) {
                if (src[i] === '{') depth++
                else if (src[i] === '}') depth--
                else if (src[i] === '"' && depth === 0)
                    return src.slice(start, i++)
            }
            throw new Error('Unterminated string in BibTeX')
        }
        const m = /^[^,}\s]+/.exec(src.slice(i))
        i += m ? m[0].length : 0
        return m ? m[0] : ''
    }

    while ((i = src.indexOf('@', i)) !== -1) {
        i++
        const type = /^\w+/.exec(src.slice(i))?.[0].toLowerCase()
        if (!type) continue
        i += type.length
        skipWs()

        if (['comment', 'preamble', 'string'].includes(type)) {
            if (src[i] === '{' || src[i] === '(') readGroup()
            continue
        }

        const body = readGroup()
        const comma = body.indexOf(',')
        const entry = { type, key: body.slice(0, comma).trim(), fields: {} }

        // Parse fields within the entry body
        const outer = { src, i }
        src = body
        i = comma + 1
        while (i < src.length) {
            skipWs()
            const name = /^[\w-]+/.exec(src.slice(i))?.[0]
            if (!name) break
            i += name.length
            skipWs()
            if (src[i] !== '=') break
            i++
            entry.fields[name.toLowerCase()] = readValue().trim()
            skipWs()
            if (src[i] === ',') i++
        }
        ;({ src, i } = outer)

        entries.push(entry)
    }

    return entries
}
