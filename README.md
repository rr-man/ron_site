# ron_site

Ron's personal portfolio — a static site built with plain HTML, CSS, and JavaScript. No framework, no build step.

## Run locally

Open `index.html` directly in a browser, or serve the folder so relative paths and modules behave like production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page markup and section layout |
| `css/styles.css` | All styles; design tokens in `:root`, dark theme via `[data-theme="dark"]` |
| `js/projects.js` | Project data (`window.PROJECTS`) — edit this to change the Projects section |
| `js/main.js` | Behavior: theme toggle, mobile nav, project rendering |

## Editing

- **Add a project:** append an entry to `window.PROJECTS` in `js/projects.js`.
- **Change colors/spacing:** edit the CSS custom properties in `:root` (and the `[data-theme="dark"]` block) in `css/styles.css`.
- **Update contact links:** edit the `mailto:` and social links in the Contact section of `index.html`.
