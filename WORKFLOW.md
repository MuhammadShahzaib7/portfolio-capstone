# Development Workflow

Guidance for building and shipping the portfolio capstone project.

## Stack

- **Vite** — dev server and production bundler
- **React** — UI library (JSX)
- **CSS** — component and global styles in `src/`

## Daily workflow

1. Pull latest changes from `main`
2. Create a feature branch for your work
3. Run `npm run dev` and develop locally at [http://localhost:5173](http://localhost:5173)
4. Run `npm run build` before opening a PR to catch build errors
5. Open a pull request with a short summary and test notes

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Lint JSX/JS files
```

## Project layout

```
portfolio-capstone/
├── public/              # Static assets served as-is
├── src/
│   ├── components/      # Reusable UI (e.g. SettingsForm)
│   ├── App.jsx          # Root application component
│   ├── main.jsx         # React entry point
│   ├── App.css          # App-level styles
│   └── index.css        # Global base styles
├── index.html           # HTML shell (Vite entry)
├── vite.config.js       # Vite configuration
└── package.json
```

## Conventions

- Keep components in `src/components/`
- Use named or default exports consistently per file
- Prefer functional components and hooks
- Colocate component-specific styles or use shared CSS modules as the project grows
- Do not commit `.env` files or secrets

## Deployment

Build output goes to `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
