# dylanjpfeifer.com

Static personal site — plain HTML + CSS, no build step, no dependencies.

## Structure

```
index.html                  About / home
videoediting/index.html     Portfolio grid
videoediting/<slug>/        One folder per project
writing/index.html          Scripts + copywriting
contact/index.html          Contact
resume/index.html           Resume (placeholder)
404.html                    Not-found page
assets/css/style.css        All styling
assets/img/                 Logo, favicon
assets/img/thumbs/          Project thumbnails
CNAME                       Custom domain for GitHub Pages
```

## Editing

Everything is hand-written HTML. To change the design, edit `assets/css/style.css` —
the palette lives in the `:root` block at the top.

The header and footer are duplicated in each page. If you change one, change it
everywhere (find-and-replace across `*.html` works fine).

## Adding a project

1. Drop a 16:9 thumbnail in `assets/img/thumbs/<slug>.jpg` (800px wide is plenty).
2. Copy an existing folder in `videoediting/`, rename it, and update the title,
   YouTube ID, description and Project Scope list.
3. Add a card to the grid in `videoediting/index.html`.
4. Fix the prev/next links on the neighbouring project pages.
5. Add the URL to `sitemap.xml`.

## Local preview

The pages use absolute paths (`/assets/...`), so open them through a local
server rather than double-clicking the file.

## Deploying

Pushing to the `main` branch of the GitHub repo publishes automatically via
GitHub Pages. `CNAME` keeps the custom domain attached — don't delete it.
