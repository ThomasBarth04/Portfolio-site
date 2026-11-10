# thomasbarth — personal site

A single-page personal site: about, timeline, thoughts, projects and contact.
Built with React (Create React App). The design is inspired by
[Björk](https://andersnoren.se/teman/bjork-wordpress-theme/) by Anders Norén.

## Run it

```sh
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build in build/
```

## Editing content

All content lives in `src/data` and `src/components/About/About.jsx`.

| What                     | Where                                |
| ------------------------ | ------------------------------------ |
| Intro text and "Right now" cards | `src/components/About/About.jsx` |
| Timeline                 | `src/data/timeline.json`             |
| Thoughts feed            | `src/data/thoughts.js`               |
| Projects                 | `src/data/projects.json`             |

### Post a thought

Add an entry to the list in `src/data/thoughts.js` and deploy:

```js
{
  date: "2026-12-01",
  title: "Optional title",
  body: `
First paragraph.

A blank line starts a new paragraph. Links like https://example.com
are turned into links automatically.
`,
},
```

The feed sorts by `date`, newest first, and shows five at a time.

### Add a timeline entry

Add an object to `src/data/timeline.json`. Entries are shown in file order, so
put new ones at the top. `type` is `work`, `education` or `volunteering` and
drives the filter buttons. `url` and `place` can be empty strings.

### Projects

Projects with `"feature": true` are shown by default; the rest appear behind
"Show all projects".

## Styling

Colours, type scale and spacing are CSS variables in `src/vars.css`, with a
dark palette that follows the system setting.
