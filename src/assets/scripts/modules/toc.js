const SELECTORS = {
    toc: '.js-toc',
    tocHeader: '.js-toc-header',
    tocToggle: '.js-toc-toggle',
    tocLink: '.toc__link'
}

const CLASSES = {
    active: 'is-active',
    open: 'is-open'
}

class TableOfContents {
    constructor() {
        // Get all TOC instances (mobile + desktop)
        this.tocElements = [...document.querySelectorAll(SELECTORS.toc)]
        if (this.tocElements.length === 0) return

        // Collect all links from all TOC instances
        this.allLinks = this.tocElements.flatMap((toc) => [
            ...toc.querySelectorAll(SELECTORS.tocLink)
        ])

        // Get unique headings from the first TOC's links
        const firstTocLinks = this.tocElements[0].querySelectorAll(
            SELECTORS.tocLink
        )
        this.headings = [...firstTocLinks]
            .map((link) => {
                const id = link.getAttribute('href').slice(1)
                return document.getElementById(id)
            })
            .filter(Boolean)

        if (this.headings.length === 0) return

        // Mobile toggle - click anywhere in header
        this.tocElements.forEach((toc) => {
            const header = toc.querySelector(SELECTORS.tocHeader)
            const toggle = toc.querySelector(SELECTORS.tocToggle)
            if (header && toggle) {
                header.addEventListener('click', () => {
                    const isOpen = toc.classList.toggle(CLASSES.open)
                    toggle.setAttribute('aria-expanded', String(isOpen))
                })
                header.style.cursor = 'pointer'
            }
        })

        // Scroll spy
        this.setupScrollSpy()
    }

    setupScrollSpy() {
        // Track current active heading
        this.currentActiveId = null

        // Use scroll event for reliable tracking
        window.addEventListener('scroll', () => this.updateActiveOnScroll(), {
            passive: true
        })

        // Initial state
        this.updateActiveOnScroll()
    }

    updateActiveOnScroll() {
        const scrollTop = window.scrollY
        const offset = 120

        let currentHeading = null
        for (const heading of this.headings) {
            const rect = heading.getBoundingClientRect()
            const top = rect.top + scrollTop
            if (top - offset <= scrollTop) {
                currentHeading = heading
            }
        }

        const newActiveId = currentHeading ? currentHeading.id : null
        if (newActiveId !== this.currentActiveId) {
            this.currentActiveId = newActiveId
            this.setActiveLink(newActiveId)
        }
    }

    setActiveLink(id) {
        this.allLinks.forEach((link) => {
            const isActive = id && link.getAttribute('href') === `#${id}`
            link.classList.toggle(CLASSES.active, isActive)
        })
    }
}

if (document.querySelector(SELECTORS.toc)) {
    new TableOfContents()
}
