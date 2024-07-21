import anchor from 'markdown-it-anchor'
import { slugify } from '../../utils/markdown.js'

const config = { slugify }

export default function anchorPlugin(md) {
    md.use(anchor, config)
}
