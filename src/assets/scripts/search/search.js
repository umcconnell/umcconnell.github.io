import Fuse from 'fuse.js/min-basic'
import { postcard } from '#src/components/card.js'

const searchBar = document.getElementById('search')
searchBar.value = new URLSearchParams(window.location.search).get('q') || ''
searchBar.focus()

const documents = await fetch('/searchindex.json').then((response) =>
    response.json()
)

const fuse = new Fuse(documents.index, {
    keys: ['title', 'description', 'content', 'tags'],
    includeScore: true,
    ignoreLocation: true
})

function debounce(func, wait, immediate) {
    let timeout
    return function () {
        let context = this,
            args = arguments
        let later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

function runSearch(query, threshold = 0.5, showPerf = true) {
    document.getElementById('search-results').innerHTML = ''
    document.getElementById('search-results-perf').innerHTML = ''

    if (query === '') {
        document.getElementById('search-results-no-results').innerText =
            'Search results will appear here'
        document
            .getElementById('search-results-no-results')
            .removeAttribute('hidden')
        return
    }

    let t0 = performance.now()
    const results = fuse.search(query).filter((r) => r.score < threshold)
    let t1 = performance.now()

    if (showPerf) {
        document.getElementById('search-results-perf').innerHTML =
            `Found ${results.length} result${results.length == 1 ? '' : 's'} in ${t1 - t0} ms`
    }

    if (results.length === 0) {
        console.log('No results found')
        document.getElementById('search-results-no-results').innerText =
            'No results ¯\\_(ツ)_/¯'
        document
            .getElementById('search-results-no-results')
            .removeAttribute('hidden')
        return
    }

    document
        .getElementById('search-results-no-results')
        .setAttribute('hidden', '')

    for (const result of results) {
        const post = result.item
        const postDate = new Date(post.updated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        const postHtml = `<li>${postcard(
            post.url,
            post.title,
            postDate,
            post.description,
            post.tags,
            'card--search'
        )}</li>`
        document
            .getElementById('search-results')
            .insertAdjacentHTML('beforeend', postHtml)
    }
}

if (searchBar.value !== '') {
    runSearch(searchBar.value.trim())
}

searchBar.addEventListener(
    'input',
    debounce((e) => {
        let query = searchBar.value.trim()
        runSearch(query)
        window.history.pushState({}, '', `?q=${encodeURIComponent(query)}`)
    }, 150)
)
