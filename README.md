# dylanjpfeifer.com

Static personal site: plain HTML + CSS, no build step, no dependencies.

## Structure

```
index.html                  About / home
work/index.html             Portfolio grid
work/<slug>/                One folder per project
writing/index.html          Scripts + copywriting
contact/index.html          Contact
resume/index.html           Resume
404.html                    Not-found page
assets/css/style.css        All styling
assets/js/nav.js            Mobile menu toggle
assets/img/                 Logo, favicon, share card
assets/img/thumbs/          Project thumbnails
assets/dylan-pfeifer-resume.pdf   Downloadable resume
```

## Editing

Everything is hand-written HTML. To change the design, edit `assets/css/style.css`;
the palette lives in the `:root` block at the top.

The header and footer are duplicated in each page. If you change one, change it
everywhere (find-and-replace across `*.html` works fine).

## Adding a project

1. Drop a 16:9 thumbnail in `assets/img/thumbs/<slug>.jpg` (800px wide is plenty).
2. Copy an existing folder in `work/`, rename it, and update the title,
   YouTube ID, description and Project Scope list.
3. Add a card to the grid in `work/index.html`.
4. Fix the prev/next links on the neighbouring project pages.
5. Add the URL to `sitemap.xml`.

## Local preview

The pages use absolute paths (`/assets/...`), so open them through a local
server rather than double-clicking the file.

## Deploying

Pushing to the `main` branch publishes automatically via GitHub Pages.

Two constraints worth knowing before you rename anything:

**The repo must be named `<username>.github.io`.** Pages serves a repo with any
other name from a subfolder (`username.github.io/some-repo/`), and every asset
here is linked from the site root (`/assets/...`), so the CSS and images would
404. Naming it `<username>.github.io` serves it from the root instead.

**The custom domain is configured in Settings → Pages,** not by hand. GitHub
writes a `CNAME` file into the repo when you set it. Don't create that file
yourself before DNS is pointing at GitHub. Pages will start redirecting the
working `github.io` URL to a domain that isn't live yet, which looks like the
deploy broke.
