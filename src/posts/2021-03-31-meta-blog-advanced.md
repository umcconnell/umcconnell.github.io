---
title: 'Meta Blog: Advanced'
date: 2021-03-31
description: >
    A blog post on how to create your own blog (posts) with 11ty.  
    Part II: Advanced technical details.
tags:
    - blog
    - webdev
---

[Part 1](/posts/2021-03-30-meta-blog-basics/) of this series went through the
basic setup and customization of this blog for your own purposes. In this part,
I will go through a few technical details, tips and additional notes, that can
allow you to extend the site and troubleshoot errors. This part can also serve
as a project reference or documentation of some sort.

## Overview

Before we go into detail about different aspects of the website, here's a quick
overview of all the different folders and what they contain:

```
.
├── config               Configuration for plugins (e.g. markdown-it, KaTeX)
├── src
│  ├── assets            Website assets
│  │  ├── fonts
│  │  ├── icons
│  │  ├── images
│  │  │  ├── favicon     Icons and images for Web App
│  │  │  └── posts       Images in posts
│  │  ├── other          Other assets (e.g. PGP key)
│  │  ├── scripts        JavaScript
│  │  │  └── modules
│  │  └── styles
│  │     ├── base        Base styles (e.g. markdown, CSS reset)
│  │     ├── components  Styling for various components
│  │     └── utils       CSS utilities
│  ├── components        Nunjucks components (e.g. card, tags)
│  ├── data              Website metadata
│  ├── includes          Nunjucks includes (e.g. footer, navbar)
│  ├── layouts           Nunjucks page layouts (e.g. base, post)
│  ├── pages             Concrete pages (e.g. about, post archive)
│  └── posts             Markdown posts
└── utils                JS utilities (e.g. filters, shortcodes)
```

## Styling

Styling is done using [SCSS](https://sass-lang.com/). All stylesheets are
located in
[`src/assets/styles`]({{ 'src/assets/styles' | sourceRepo }}).
The styles are then imported and bundled in `main.scss`.

The styles are grouped into three main folders:

-   [`base`]({{ 'src/assets/styles/base/'  | sourceRepo }}):
    The base styling comprises basic stylesheets used globally throughout the
    page, such as normalization or typography. These styles are very generic,
    meaning you probably want to modify styles in different places, such as the
    `components/` folder for specific components.

-   [`components`]({{ 'src/assets/styles/components/' | sourceRepo }}):
    These styles consist of more specific styles tailored to certain components,
    such as the footer, the navigation or the post tags. This is probably the
    best place to modify or add new styles when customizing the website.

-   [`utils`]({{ 'src/assets/styles/utils/' | sourceRepo }}):
    The utilities are mostly SCSS-specific functions, that make use of SCSS's
    scripting features. This is also where the global variables for colors,
    breakpoints, etc. are defined for the entire page.

The compilation process, including minification, and error handling is defined
in the
[`styles.11ty.js`]({{ 'src/assets/styles/styles.11ty.js' | sourceRepo }})
file. In practice, you shouldn't need to modify this file.

### Theming

The blog supports adaptive light and dark themes out of the box (based on the
[`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
media query). The different color palettes are defined in
[`_variables.scss`]({{ 'src/assets/styles/utils/_variables.scss' | sourceRepo }})
under the `$themes` key.

Individual properties are themed using the `t` SCSS
[mixin](https://sass-lang.com/documentation/at-rules/mixin). This is for example
how links are themed throughout the blog:

```scss
a {
    @include t(color, 'link-color');
    text-decoration: underline;
}
```

The mixin takes a CSS property as the first argument, followed by a variable
name referencing the desired color. This name refers to a field from the
`$themes` map, which means you can only refer to colors defined as part of a
theme. The mixin takes additional optional arguments, which you can find in the
[mixin's source]({{ 'src/assets/styles/utils/_mixins.scss#L40' | sourceRepo }}).

### Breakpoints

Breakpoints are also quickly defined using SCSS mixins. There are two mixins,
`mq` and `mq-down`, which provide breakpoints starting at, and going up to, a
certain width.

The mixins take the name of a breakpoint, as defined in the global variables. An
example use of breakpoints is when styling the navbar. The following declaration
hides the navigation burger menu for large screens (starting at 940px in width)
and up:

```scss
@include mq(lg) {
    &__toggle {
        display: none;
    }
    // ...
}
```

## Markdown

Markdown files are compiled using [markdown-it](https://github.com/markdown-it/markdown-it).
The configurations for markdown-it and it's plugins are located in the
[`config/`]({{ 'config/' | sourceRepo }}) folder.

The styles for Markdown documents, such as posts, are located in
[`src/assets/styles/base/_markdown.scss`]({{ 'src/assets/styles/base/_markdown.scss' | sourceRepo }}).
Note that Markdown documents must be wrapped in an element with class
`.markdown` for the styles to take effect. You can thus use the Markdown styles
in HTML/Nunjucks files by wrapping sections in such an element.

### Plugins

The following markdown-it plugins are used in this blog:

-   [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
-   [@iktakahiro/markdown-it-katex](https://www.npmjs.com/package/@iktakahiro/markdown-it-katex)

Additionally, two custom plugins, one for the arrow icons after external links,
and one for the anchor links when hovering over headings, are implemented in the
config folder.

### Posts

The blog supports several non-standard additions to Markdown, that add
blog-specific functionality to your posts.

#### Nunjucks expressions

You can write Nunjucks markup directly in your markdown posts, just as you would
in the other pages. Just wrap the expression between two curly braces:
`{{ '{{ Nunjucks expression }}' }}`. For example, you can conveniently link to
the page's code repository, directly in Markdown, like this:

```md
You can find the source code [here]({{ '{{ meta.code.repo }}' }}).
```

This gives:

You can find the source code [here]({{ meta.code.repo }}).

#### Shortcodes

Shortcodes are another very practical feature of Nunjucks in Markdown. All
shortcodes are defined in
[`utils/shortcodes.js`]({{ 'utils/shortcodes.js' | sourceRepo }}), and you can
add more. Shortcodes expand to a longer parameterized expression.

Standard shortcodes only take arguments, such as in this example:

```md
{{ '{%' }} 'icon pencil' {{ '%}' }}
```

This produces an SVG element: {% icon 'pencil' %}

The standard shortcodes available out of the box are:

-   `icon` to embed icons from `src/assets/icons/`
-   `ytvideo` to embed YouTube videos based on their id

There are also paired shortcodes, that wrap a markup section, such as this one:

```md
{{ '{%' }} msg 'info' {{ '%}' }}

An informative message that **even** supports _Markdown_!

{{ '{%' }} endmsg {{ '%}' }}
```

This produces the following:

{% msg 'info' %}

An informative message that **even** supports _Markdown_!

{% endmsg %}

The paired shortcodes available out of the box are:

-   `msg` for message boxes
-   `details` for an expandable HTML summary/details element

#### KaTeX

You can also include math expressions in your post. The expressions are compiled
using [KaTeX](https://katex.org/), which allows you to write TeX-like
expressions. All KaTeX configurations are located in
[`config/markdown-it/katex.js`]({{ 'config/markdown-it/katex.js' | sourceRepo }}).

For inline math expressions, wrap your code in single dollar signs: `$math$`.
For example, you can easily include fractions:

```md
A fraction $\frac{a}{b}$ includes a numerator $a$ and a denominator $b$.
```

This produces the following text:

A fraction $\frac{a}{b}$ includes a numerator $a$ and a denominator $b$.

For blocks of math, wrap your code in double dollar signs: `$$ math $$`.
For example, you can display Euler's identity:

```md
Euler's identity:
$$e^{i \pi} = -1$$
```

This results in:

Euler's identity:
$$e^{i \pi} = -1$$

You can find all supported expressions and formatting options in the
[KaTeX docs](https://katex.org/docs/supported.html).

## Nunjucks

[Nunjucks](https://mozilla.github.io/nunjucks/) is used as the templating
language for the blog.

There are several places where Nunjucks is used:

-   [`src/components/`]({{ 'src/components/' | sourceRepo }}):
    Nunjucks allows imports of so-called
    [macros](https://mozilla.github.io/nunjucks/templating.html#macro), which
    are used to represent the components. Macros are similar to functions and
    accept arguments to construct a parameterized output.

-   [`src/includes/`]({{ 'src/includes/' | sourceRepo }}):
    Nunjucks'
    [includes](https://mozilla.github.io/nunjucks/templating.html#include) allow
    you to literally include chunks of markup as reusable units. This is used
    for non-variant parts of the website, such as the footer, header, etc..

-   [`src/layouts/`]({{ 'src/layouts/' | sourceRepo }}):
    Layouts are page skeletons that are used as a common base among pages.
    The base layout is the HTML skeleton for all other pages and layouts.
    The post layout extends this base layout to include additional stylesheets
    for code highlighting or the utterances comment widget.

-   [`src/pages/`]({{ 'src/pages/' | sourceRepo }}):
    The pages represent concrete pages of the website, such as the
    [About page](/about/) or the [Projects page](/projects/). These are written
    with Nunjucks, but already include front matter for 11ty.

## 11ty

Most of the 11ty-related configuration is placed in the
[`.eleventy.js`]({{ '.eleventy.js' | sourceRepo }}) file.

Note, that if you are serving this website from a subproject on Github pages,
i.e. when you are not using `GH_USERNAME.github.io`, but rather
`GH_USERNAME.github.io/PROJECT/`, you must change the 11ty `pathPrefix` field in
the configuration file. The setting is commented out in this website's
configuration.

In development mode (`npm run dev`), Markdown posts and images in the
`src/posts/drafts/` folder will also be built and served. They do, however, not
appear in production mode and are not tracked by git.

### Icons

All icons placed in the
[`src/assets/icons/`]({{ 'src/assets/icons/' | sourceRepo }}) folder will be
grouped into an SVG sprite to improve loading time. The icons can then be used
via the `icon` [shortcode](#shortcodes).

### Plugins

The 11ty plugins used in this blog are:

-   [@11ty/eleventy-plugin-rss](https://www.npmjs.com/package/@11ty/eleventy-plugin-rss)
-   [@11ty/eleventy-plugin-syntaxhighlight](https://www.npmjs.com/package/@11ty/eleventy-plugin-syntaxhighlight)
-   [@11ty/eleventy-navigation](https://www.npmjs.com/package/@11ty/eleventy-navigation)

You can find the full list of available plugins in the
[11ty docs](https://www.11ty.dev/docs/plugins/)

## Webpack & Babel

All JavaScript code referenced in
[`src/assets/scripts/main.js`]({{ 'src/assets/scripts/main.js' | sourceRepo }})
is transpiled to backwards compatible JavaScript using
[babel](https://babeljs.io/) to support older browsers.

The code files are then bundled using [webpack](https://webpack.js.org/), with
the webpack configuration file located at
[`src/assets/scripts/scripts.11ty.js`]({{ 'src/assets/scripts/scripts.11ty.js' | sourceRepo }}).
The bundling process uses an in-memory file system to bundle the scripts in
memory and return the bundled result as a reusable JS string.

## Github

The site is automatically built and linted using the provided Github Actions
workflows. The workflow files are located in the
[`.github/workflows/`]({{ '.github/workflows/' | sourceRepo }}) folder.

The lint action uses Prettier to check the code for styling and formatting
issues. See the [VSCode](#vscode) section for information on the Prettier
extension to automatically format your code when you save.

## VSCode

For VSCode users, I recommend installing the
[Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
to automatically format your code and posts on save. All recommended
plugins are listed in the [`.vscode/`]({{ '.vscode/' | sourceRepo }}) folder.
These recommendations should be automatically suggested when first opening the
project in the editor.

That was it. Thanks for reading!
