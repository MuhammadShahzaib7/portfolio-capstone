# Portfolio Capstone

A capstone project to build and deploy a personal portfolio website that showcases projects, skills, experience, and contact information.

**Status:** Vite + React application scaffolded; portfolio sections in progress.

## About

This repository is the source for a recruiter-friendly portfolio site. The goal is to present a clear personal brand, demonstrate full-stack web development skills, and ship a fast, accessible, production-ready experience.

## Features

- **Professional presentation** — polished layout and copy aimed at recruiters and hiring managers
- **Project showcase** — highlight selected work with descriptions, tech stacks, and links
- **Skills and experience** — structured sections for technical strengths and career history
- **Performance and accessibility** — responsive design with attention to load time and usability
- **Production deployment** — intended for deployment to Vercel with a custom domain

## Tech Stack

| Layer        | Choice                                      |
| ------------ | ------------------------------------------- |
| Framework    | Vite with React (JSX)                       |
| Styling      | CSS                                         |
| Deployment   | Static host (e.g. Vercel, Netlify)          |

## Planned Site Sections

| Section    | Purpose                                      |
| ---------- | -------------------------------------------- |
| Hero       | Introduction and primary call to action      |
| About      | Background, summary, and personal context    |
| Projects   | Featured work with links and tech highlights |
| Skills     | Languages, frameworks, and tools             |
| Experience | Roles, responsibilities, and outcomes        |
| Contact    | Email, social links, and contact form        |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later
- npm (included with Node.js)

### Clone the repository

```bash
git clone https://github.com/MuhammadShahzaib7/portfolio-capstone.git
cd portfolio-capstone
```

### Development commands

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Additional scripts:

```bash
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Lint source files
```

## Repository Structure

```
portfolio-capstone/
├── README.md
├── LICENSE
├── .gitignore
├── CLAUDE.md
├── WORKFLOW.md
├── package.json
├── vite.config.js
├── index.html
├── public/              # Static assets
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── App.css
    ├── index.css
    └── components/
        └── SettingsForm.jsx
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Author

**Muhammad Shahzaib** — [GitHub](https://github.com/MuhammadShahzaib7)
