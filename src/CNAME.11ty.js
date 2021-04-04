class Cname {
    data() {
        // Conditionally generate CNAME when using a custom_domain in
        // `data/meta.json`
        const fs = require('fs')
        const meta = JSON.parse(
            fs.readFileSync(__dirname + '/data/meta.json', 'utf-8')
        )

        return {
            permalink: !!meta.custom_domain ? 'CNAME' : false,
            eleventyExcludeFromCollections: true
        }
    }

    render(data) {
        return `${data.meta.custom_domain}`
    }
}

module.exports = Cname
