import katex from '@iktakahiro/markdown-it-katex'

const macros = {
    '\\f': '#1f(#2)'
}

const config = {
    displayMode: true,
    leqno: false,
    fleqn: false,
    throwOnError: true,
    errorColor: '#cc0000',
    strict: 'error',
    output: 'htmlAndMathml',
    trust: true,
    macros
}

export default function katexPlugin(md) {
    md.use(katex, config)
}
