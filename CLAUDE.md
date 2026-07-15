# CLAUDE.md

Guidance for AI assistants working on this portfolio capstone project.

## What this is

A personal portfolio website capstone project for **MuhammadShahzaib7**. The site should showcase projects, skills, experience, and contact information in a polished, recruiter-friendly format.

Tone: professional, concise, and action-oriented. Avoid clichés and filler copy.

## Stack

- **Vite** with **React** (JSX)
- **CSS** for styling
- Deploy target: static host (e.g. **Vercel**)

## Commands

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
npm run preview
npm run lint
```

## File structure

```
src/
  components/     # Reusable UI (e.g. SettingsForm)
  App.jsx         # Root application component
  main.jsx        # React entry point
  App.css         # App-level styles
  index.css       # Global base styles
public/           # Static assets
index.html        # HTML shell (Vite entry)
vite.config.js    # Vite configuration
```

## Conventions

- Use **controlled React inputs** for all form fields
- Export validation logic separately when forms need tests (e.g. `validateSettings`)
- Use **named exports** for utilities; default exports for components as needed
- Keep copy in components or a dedicated data layer — not scattered magic strings
- Respect `prefers-reduced-motion` for animations
- Mobile-first responsive design
- Match existing naming and file layout when adding new code

## Project Rules

1. All forms must use controlled React inputs.
2. Every form must validate required fields before submission.
3. Every input must include an associated label and support keyboard navigation.
4. Request tests before considering a feature complete.
5. Review edge cases before committing generated code.

These rules are concrete and testable — follow them when implementing or reviewing any feature.

## Rules

- Minimize scope — only change what the task requires
- Do not commit secrets (`.env`, API keys, tokens)
- Do not create git commits unless explicitly asked
- Prefer simple, readable solutions over over-engineering
- Add comments only for non-obvious business logic or technical constraints

## Reference

- [README.md](README.md) — public project overview
