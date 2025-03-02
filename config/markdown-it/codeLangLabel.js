export default function codeLangLabels(md) {
    const defaultRender = md.renderer.rules.fence

    md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
        let html = defaultRender(tokens, idx, options, env, slf)

        // Extract language from the first token
        let lang = tokens[idx].info.trim()
        if (lang) {
            return `<div class="code-block-wrapper"><span class="code-lang-label">${lang.toUpperCase()}</span>${html}</div>`
        }

        return html
    }
}
