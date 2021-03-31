---
title: 'Meta Blog: Basics'
date: 2021-03-30
description: >
    A blog post on how to create your own blog (posts) with 11ty.
    Part I: The basics.
tags:
    - blog
    - webdev
    - beginner
---

In my [Hello Internet](/posts/2021-03-11-hello-internet/) post I announced my
intention to write a post on how I set up this blog and how you can do the same.
The time has now finally come, and the original idea has morphed into a two-part
series. Enjoy!

{% msg 'info' %}

This tutorial is primarily meant for beginners. It explains cloning this blog
from Github, personalizing it with custom icons, name and color, and finally
publishing it with Github pages. [Part 2](/posts/2021-03-31-meta-blog-advanced/)
goes further into the technical details of the blog.

If you prefer getting started right away, feel free to skip to the
[Getting started](#getting-started) section. Also, there is a
[video tutorial](#video-tutorial) available for a visual guide on the setup
process.

{% endmsg %}

## Static Site

Before we dive into building a static website, it is helpful to quickly look at
what a static website actually is.

On [Wikipedia](https://en.wikipedia.org/wiki/Static_web_page), a static website
is defined as "[...] a web page that is delivered to the user's web browser
exactly as stored, in contrast to dynamic web pages [...]". Concretely, this
means no dynamic pages, no fancy PHP scripts and no on-page user login. Only
plain good ol' HTML, with some additional CSS and JavaScript Why would one want
such a boring thing?

Well, it turns out there're quite a lot of advantages to static sites, if all
you have is static content. Static sites are...

-   **faster**: only HTML, CSS, JS and images are served
-   **safer**: no login systems, etc. means a minimal attack surface
-   **more accessible**: an old browser and a slow internet connection is fine
-   **cheaper**: free hosting available, e.g. with Github Pages or Netlify

... than their dynamic counterparts.

A static site doesn't necessarily mean being limited in functionality, or having
a site consisting of only text and images. There are _a lot_ of possibilities on
the front-end, ranging from embedded YouTube videos and RSS feeds to a
comment system (more on this later on and in Part 2).

## SSGs

When creating your static blog, it can be helpful to use a Static Site Generator
(_SSG_). An SSG helps to make the development and editing process comfortable.
Instead of writing your posts in plain HTML, you can write them in Markdown and
have the SSG convert your posts to HTML files.

This is a similar idea to the concept of compiling code from a higher level
language (such as C or Rust) to machine code, allowing you to write fast code
in a simpler and human-readable form. The process of "compiling" your website
will be referred to as _building_ in the following.

In this guide we'll be talking about setting up and configuring an SSG called
[11ty](https://www.11ty.dev/) (pronounced _eleventy_). 11ty runs on top of
[Node](https://nodejs.org/), which allows you to benefit from the massive
JavaScript ecosystem and write your own plugins in JavaScript.

## Getting started

### Prerequisites

Before we get started with the setup, make sure you have the following
prerequisites:

-   **git**: You can find installation instructions for all platforms
    [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
-   **github**: You can create an account [here](https://github.com/join)
-   **node**: You can download node from [here](https://nodejs.org/en/download/)

### Cloning

Start by cloning my blog from the Github repository. In a terminal, run:

```bash
git clone https://github.com/umcconnell/umcconnell.github.io.git blog
cd blog/
```

This will clone the code into the folder `blog/`.

### Installing

In the blog root folder, install the required dependencies using npm:

```bash
npm install
```

The installation might take a minute or two.

### Running

Once the installation has finished, you are ready to run the build process and
serve the blog on your localhost. Run:

```bash
npm run dev
```

You should be able to navigate to [localhost:8080](http://localhost:8080/) and
see the blog as it appears here.

## Personalizing

Now the blog is ready for customization. To do that, you will need to change
four files:

-   [`package.json`](#packagejson)
-   [`LICENSE`](#license)
-   [`src/site.webmanifest`](#srcsitewebmanifest)
-   [`src/data/meta.json`](#srcdatametajson)

### package.json

The `package.json` file describes your node project. It mainly contains
information about the project's source code and package dependencies.

You can add your name to the `author` field and change the `description` field
to your liking.

The `name` and `repository.url` fields should contain your project name and
source code repository. The project name should be `GH_USERNAME.github.io`, the
repository url `http://github.com/GH_USERNAME/GH_USERNAME.github.io`
accordingly. Replace `GH_USERNAME` with your Github username.

### LICENSE

Modify the `LICENSE` file to mention your name as the Copyright owner in the
first line.

### src/site.webmanifest

The `src/site.webmanifest` file describes the web app behavior of your blog.
This controls how the website will be presented when a user adds the blog to
their home screen, i.e. installing the web app.

Here, you can change the `name` and `short_name` field.

### src/data/meta.json

Finally, the last file to personalize is `src/data/meta.json`. This file
contains important meta-information about the blog, such as the author, the
source and comment repositories for the blog, etc.

Make sure to change the `title` and `author` fields, which will for example
change the footer or the about page of the blog.

The `url` should contain the final URL of the website, i.e.
`GH_USERNAME.github.io`, where `GH_USERNAME` is your Github username.

Most importantly however, change the fields in the `code` section of the
webmanifest:

-   The `repo` entry should point to the Github repository of the
    website (`https://github.com/GH_USERNAME/GH_USERNAME.github.io`).

-   The `comments` field points to the repository that will save user comments
    from the blog. This should be `GH_USERNAME/comments`. We'll create this repo
    later.

Once you've saved the files, you should be able to see your name appear on the
blog.

### Icons

To change the icons that appear in the header, when installing the web app,
etc., navigate to `src/assets/images/`.

The avatar, displayed in the header of the website, can be changed by replacing
the `avatar.png` file with your own image. You may also change the `email.png`
image, which is displayed in the about page as your contact information.

The icons used for the web app are located in the `favicon/` subfolder. When
replacing these icons with your own, custom icons, make sure to keep the naming
and size of the individual files.

### Colors

If you want, you can further personalize the blog with custom colors, styles,
and more. All styles and related configurations are located in the
`src/assets/styles/` folder. Stylesheets are written in
[SCSS](https://sass-lang.com/). Note that all valid CSS is valid SCSS, which
means you can style the blog in plain CSS if that is more familiar to you.

More specifically, the colors used throughout the web page can be changed in the
`utils/_variables.scss` file. The main theme color is defined by the
`$brand-color-primary` variable.These variables are used in all the other
styles, which means it should be enough to change the colors in this file.

### Comments

The last thing to do personalize your new blog is to activate the comments
functionality. The blog uses a free service called
[utterances](https://utteranc.es/), which takes care of managing your comments.
It will display a widget at the bottom of your blog post, that lets users leave
a comment. Note that the comments widget is not displayed when you are in
development mode and serving your blog on localhost (`npm run dev`). It will
appear in the online version.

The comments are stored in a Github repository, which means you don't need to
worry about storing your comments. To be able to store comments in a Github
repository on your behalf, you will need to install the the
[utterances Github app](https://github.com/apps/utterances). Follow the link and
click the install button. You will need to grant the app access to your
repositories. You can later restrict access to the comments repo only in your
[settings](https://github.com/settings/installations).

## First post

Your new blog should probably contain a introductory post. All posts are written
in Markdown and located in `src/posts/`.

Go ahead and delete the posts already in the folder (all files ending with
`.md`). Next, create a file called `YYYY-MM-DD-hello-world.md`, where `YYYY`,
`MM` and `DD` refers to the current date (e.g. 2021-03-14).

You place the following text into the file and modify it to your liking.
Changes you make to the file should be reflected instantaneously in your web
browser.

```md
---
title: Hello World
date: 2021-03-14
description: >
    Hello World introductory post.
tags:
    - hello
    - world
    - intro
---

Hi everyone!

This is my _brand new_ blog. **Enjoy**!
```

That's it! You're blog is ready to go online.

## Publishing

After customizing the blog, we are now ready to publish our blog. We will
publish the blog on [Github pages](https://pages.github.com/). After following
these steps, your page will be available at `https://GH_USERNAME.github.io`.

### Committing

Start by committing all your customization changes to git. In the root folder
of the blog, run:

```bash
git add .
git commit -av
```

### Creating Repositories

Next, we'll create the Git repositories that will hold the source code of your
blog and the comments to your posts.

In your web browser, navigate to [github.com/new](https://github.com/new) to
create a new repository.

For the comments repo, enter `comments` as the repository name. Make sure, the
repo visibility is set to "Public", before hitting the "Create repository"
button.

Repeat this step for the repo that is going to hold the blog's source code.
Enter `GH_USERNAME.github.io` as repo name (where `GH_USERNAME` is your Github
username) and select the visibility "Public". Then, create the repository.

You should see a set of instructions to publish your code. Note the instructions
to "push an existing repository from the command line". When executing these
instructions in the root folder of your blog, you will need to change one
command. Because you have cloned the original blog code from Github, it already
has a remote git origin set. You will need to use `set-url` instead of `add`
here:

```bash
git remote set-url origin https://github.com/GH_USERNAME/GH_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

### Github Pages

The last step is to publish your pages using Github pages. In your repository
containing the blog source, navigate to the "Settings" tab. Almost at the
bottom of the page, you should find a "Github pages section".

![Github Pages section in the repository settings](/assets/images/posts/meta-blog/github-pages-publish.png)

From the source drop-down, select the "gh-pages" branch. After hitting the save
button, your site should be available online.

## Video tutorial

My friend Boldizsar Zopcsak and I recorded a video tutorial about this whole
procedure a little while ago. The video goes through the basics of cloning,
personalizing and publishing your next blog. Feel free to have a look:

{% ytvideo 'wVjtl6qb_II' %}

For a look at the technical details of this blog, head over to
[Part 2](/posts/2021-03-31-meta-blog-advanced/) of this series.
