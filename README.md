# Portfolio Capstone

A capstone project to build and deploy a personal portfolio website that showcases projects, skills, experience, and contact information.

**Status:** Early setup — repository scaffolding is in place; the application has not been scaffolded yet.

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
| Framework    | Next.js (App Router) with React & TypeScript |
| Styling      | Tailwind CSS                                |
| Deployment   | Vercel                                      |

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

Once the Next.js application is scaffolded, use:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Additional scripts (expected after setup):

```bash
npm run build      # Production build
npm run lint       # Lint source files
npm run typecheck  # TypeScript check (if configured)
```

## Repository Structure

**Current**

```
portfolio-capstone/
├── CLAUDE.md    # AI assistant guidance for this repo
├── LICENSE      # MIT License
├── README.md
└── .gitignore
```

**Planned (after scaffolding)**

```
portfolio-capstone/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI and section components
│   ├── sections/     # Hero, About, Projects, Skills, Experience, Contact
│   └── ui/           # Buttons, cards, typography helpers
├── lib/              # Utilities, types, and static data
└── public/           # Images, resume PDFs, and static assets
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Author

**Muhammad Shahzaib** — [GitHub](https://github.com/MuhammadShahzaib7)
