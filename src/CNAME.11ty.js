import { readFileSync } from 'fs'

export default class Cname {
    data() {
        // Conditionally generate CNAME when using a custom_domain in
        // `data/meta.json`
        const meta = JSON.parse(
            readFileSync(import.meta.dirname + '/data/meta.json', 'utf-8')
        )

        return {
            permalink: !!meta.custom_domain ? 'CNAME' : false,
            eleventyAllowMissingExtension: true,
            eleventyExcludeFromCollections: true
        }
    }

    render(data) {
        return `${data.meta.custom_domain}`
    }
}
