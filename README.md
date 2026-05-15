# Portfolio

Personal portfolio website for [h2faid.me](https://h2faid.me).

This site presents my projects, experience, skills, academic work, and self-hosted infrastructure. It is built as a fast static portfolio with Astro and deployed to my own server.

## Purpose

The portfolio is meant to be a central place for my technical profile. It combines academic work, professional experience, personal projects, and infrastructure work in one site.

The main goals are:

- present selected software and academic projects clearly
- document my self-hosted infrastructure setup
- provide a clean CV-like overview of experience and skills
- keep project pages easy to update through Markdown
- run the site on my own infrastructure instead of a hosted portfolio builder

## Stack

- Astro
- TypeScript
- Tailwind CSS
- daisyUI
- Markdown content collections
- Prettier with Astro formatting support

## Main sections

The site currently includes:

- Home page with a short profile and featured projects
- Project overview with generated project pages
- Experience and education page
- Skills page
- About page
- Contact page
- Impressum and privacy pages in German and English

## Content management

Project pages are managed through Astro content collections.

Each project is stored as a Markdown file in `src/content/projects`. The project overview and individual project pages are generated from those files.

This keeps the project content separate from the page layout and makes it easier to add or update projects without duplicating page structure.

A project entry contains metadata such as title, description, category, status, date, tags, repository link, and display order.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Format files:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

## Deployment

The source code is public in this repository.

Deployment is handled through a separate private deployment repository. That repository uses a self-hosted GitHub Actions runner on my server to build and deploy the site.

This keeps the portfolio source public while keeping deployment access separate from the public repository.

## Self-hosting

The website is part of my personal homelab setup.

The public request path is handled through a Caddy reverse proxy, which forwards traffic to the application host. The portfolio itself is built as a static site and served from my own infrastructure.

This setup is also documented as one of the projects on the website.

## Design

The site uses daisyUI themes for light and dark mode. By default, the theme follows the user's system preference. If the user manually changes the theme, the selected preference is stored in the browser.

The design goal is a clean technical portfolio: readable, fast, modern, and focused on content rather than unnecessary visual effects.

## Links

- Website: [https://h2faid.me](https://h2faid.me)
