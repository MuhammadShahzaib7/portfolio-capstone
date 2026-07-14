# CLAUDE.md

Guidance for AI assistants working on this portfolio capstone project.

## What this is

A personal portfolio website capstone project for **MuhammadShahzaib7**. The site should showcase projects, skills, experience, and contact information in a polished, recruiter-friendly format.

Tone: professional, concise, and action-oriented. Avoid clichés and filler copy.

## Stack

- **Next.js** (App Router) with **React** and **TypeScript**
- **Tailwind CSS** for styling
- Deploy target: **Vercel**

Update this section as the stack is finalized during development.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck  # if configured
```

## File structure

```
app/              # Pages, layouts, global styles
components/       # UI primitives and page sections
  sections/       # Hero, About, Projects, Skills, Experience, Contact
  ui/             # Buttons, cards, typography helpers
lib/              # Types, utilities, static data
public/           # Images, resume PDFs, project screenshots
```

## Conventions

- Use **TypeScript strict** mode; avoid `any`
- Prefer **Server Components** by default; add `"use client"` only when needed (state, effects, browser APIs)
- Use **named exports** for components and utilities
- Keep copy in components or a dedicated data/i18n layer — not scattered magic strings
- Use `next/image` for all images
- Respect `prefers-reduced-motion` for animations
- Mobile-first responsive design with Tailwind breakpoints (`sm`, `md`, `lg`, `xl`)
- Match existing naming and file layout when adding new code

## Rules

- Minimize scope — only change what the task requires
- Do not commit secrets (`.env`, API keys, tokens)
- Do not create git commits unless explicitly asked
- Prefer simple, readable solutions over over-engineering
- Add comments only for non-obvious business logic or technical constraints

## Reference

- [README.md](README.md) — public project overview
