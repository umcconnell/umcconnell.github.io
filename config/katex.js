const macros = {
    '\\f': '#1f(#2)'
}

module.exports = {
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
