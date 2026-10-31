import fs from 'fs'
import {
    parseBibtex,
    parseAuthors,
    latexToUnicode
} from '../../utils/bibtex.js'

const BIB_FILE = './src/data/publications.bib'

const EPRINT_URLS = {
    arxiv: (id) => `https://arxiv.org/abs/${id}`
}

function links(f) {
    const result = []
    if (f.doi) result.push({ label: 'DOI', url: `https://doi.org/${f.doi}` })

    const eprintType = f.archiveprefix || f.eprinttype
    if (f.eprint && eprintType) {
        const makeUrl = EPRINT_URLS[eprintType.toLowerCase()]
        // Other servers (bioRxiv, medRxiv, ...) are identified by DOI
        const url = makeUrl ? makeUrl(f.eprint) : `https://doi.org/${f.eprint}`
        result.push({ label: latexToUnicode(eprintType), url })
    }

    if (f.url && !result.length) result.push({ label: 'Link', url: f.url })
    return result
}

export default function () {
    const entries = parseBibtex(fs.readFileSync(BIB_FILE, 'utf-8'))

    return entries
        .map(({ key, fields: f }) => {
            const venue = f.booktitle || f.journal || f.howpublished || ''
            return {
                key,
                year: Number(f.year || (f.date || '').slice(0, 4)),
                title: latexToUnicode(f.title || ''),
                authors: parseAuthors(f.author || ''),
                venue: latexToUnicode(
                    [venue, f.address].filter(Boolean).join(', ')
                ),
                note: f.note ? latexToUnicode(f.note) : null,
                links: links(f)
            }
        })
        .sort((a, b) => b.year - a.year) // stable: keeps file order within a year
}
