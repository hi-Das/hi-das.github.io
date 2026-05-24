# hi-das.github.io

This site is now content-driven. The homepage and printable resume both render from a single data source, so normal updates do not require editing HTML.

## Where to edit

Update the content in `site-data.js`.

That file controls:

- SEO metadata
- profile details
- hero copy and CTA links
- highlights and focus areas
- skill groups
- work experience
- case studies
- certifications
- resume summary and quick info

## Active files

```text
index.html        Homepage shell only
styles.css        Homepage design system and layout
script-notion.js  Homepage renderer and interactions
site-data.js      Single source of truth for editable content
resume.html       Resume shell only
resume.css        Resume styles
resume.js         Resume renderer
```

## How the refactor works

- `index.html` contains only the layout shell.
- `script-notion.js` reads `window.siteContent` from `site-data.js` and renders the page.
- `resume.html` and `resume.js` reuse the same content source for a printable resume page.

## Typical edits

If you want to change text, links, jobs, certifications, or skills:

1. Open `site-data.js`.
2. Update the relevant object or array.
3. Commit and push to `main`.

## Deployment

This repository is already set up for GitHub Pages. Push to `main` and GitHub Pages will publish the updated site.

## Notes

- The active homepage uses `index.html`, `styles.css`, `site-data.js`, and `script-notion.js`.
- The site uses external Google Fonts. If you want a fully self-hosted setup later, those can be vendored locally.
