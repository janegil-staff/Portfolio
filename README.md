# Portfolio – Qup Recover and Qup Pulse

A one-page Next.js portfolio (App Router, plain JavaScript, no extra dependencies).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

Everything is in `src/data/projects.js`: your name, email, the text for each app,
store links and which images to show.

## Add screenshots

Put images in `public/screens/` and set the matching `src` in `src/data/projects.js`.
Any image left as `null` shows a styled placeholder frame.

Still missing (these show a placeholder frame until you add them):
- Qup Pulse: phone screenshots of the feed and people-nearby screens

Phone screenshots look best at the iPhone's native size (for example 1206 × 2622),
saved as .webp around 720 px wide.

## Deploy

Push to GitHub and import the repo on Vercel, or run `npm run build && npm start`
on any Node.js host (for example DigitalOcean App Platform).
