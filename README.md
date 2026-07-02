# Gautam B — Portfolio (v2, Simple & Friendly)

A clean, easy-to-follow portfolio built with React + Tailwind CSS. Instead of the code-editor theme,
this version uses a conventional resume-style layout with warm colors, icons, soft gradients, cards,
and scroll animations — a "full-stack" layered graphic in the hero doubles as the design's signature
element (Frontend / Backend / Database, stacked).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Editing content

Content lives directly in `src/components/`:

- `Hero.jsx` — name, tagline, and the stacked-layers graphic
- `About.jsx` — summary and quick stats
- `Skills.jsx` — skills grouped by category
- `Projects.jsx` — project cards
- `Journey.jsx` — education, training, and certification timeline
- `Contact.jsx` — contact cards and call-to-action banner

Update the arrays/strings at the top of each file to change the content.
