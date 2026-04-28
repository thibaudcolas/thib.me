# AGENTS.md - thib.me

AI assistant context for Thibaud's personal portfolio website and blog.

## Repository Overview

**thib.me** is a static site built with [Jekyll](https://jekyllrb.com/) (Ruby) and deployed to GitHub Pages. It features:

- Personal blog with posts on accessibility, Django, Wagtail, and sustainability
- Conference talk listings
- Interactive data visualizations
- Grid-aware Cloudflare Workers for carbon-conscious serving
- JSON Resume export

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Site Generator | Jekyll | ~> 4.4.0 |
| Language | Ruby | 3.4.9 |
| Theme | Minima | ~> 2.0 |
| JS Runtime | Node.js | 22 |
| Styling | SCSS |
| Deployment | GitHub Pages |
| Edge Workers | Cloudflare Workers |

### Key Jekyll Plugins

- `jekyll-feed` — RSS/Atom feeds
- `jekyll-paginate` — Post pagination
- `jekyll-redirect-from` — URL redirects
- `jekyll-sitemap` — XML sitemap generation

## Directory Structure

```
├── src/                    # Jekyll source files
│   ├── _posts/            # Blog posts (YYYY-MM-DD-title.md format)
│   ├── _layouts/          # HTML templates
│   ├── _includes/         # Reusable HTML partials
│   ├── _sass/             # SCSS styles
│   ├── _data/             # YAML/JSON data files
│   ├── assets/            # Static assets (images, CSS, JS)
│   ├── talks/             # Conference talk pages
│   ├── viz/               # Data visualizations
│   └── index.html         # Homepage
├── workers/               # Cloudflare Workers
│   ├── grid-aware/        # Grid-aware website library
│   └── grid-aware-worker/ # Edge worker implementation
├── scripts/               # Build scripts
├── raw/                   # Source data for processed files
├── dist/                  # Build output (gitignored)
└── _config.yml            # Jekyll configuration
```

## Development Workflow

### Prerequisites

- Ruby 3.3.5 (use rbenv)
- Bundler (`gem install bundler`)
- Node.js 22

### Setup

```bash
bundle install       # Install Ruby dependencies
npm install          # Install Node dependencies
```

### Available Scripts

| Script | Purpose |
|--------|---------|
| `npm start` | Start Jekyll development server (`bundle exec jekyll serve`) |
| `npm run dist` | Production build (`jekyll build` + resume export) |
| `npm run dist:repositories` | Fetch GitHub repos to `_data/repositories.yml` |
| `npm run dist:resume` | Export JSON Resume to `dist/resume.html` |
| `npm run lint` | Run Prettier on all supported files |
| `npm run format` | Auto-format with Prettier |
| `npm run test:ci` | Full CI pipeline (build + lint) |

### Creating a New Post

1. Create file in `src/_posts/YYYY-MM-DD-title.md`
2. Use Front Matter:

```yaml
---
layout: post
title: "Your Title"
date: 2025-01-15
comments: true
categories:
  - CategoryName
---
```

3. Categories used: `Accessibility`, `Django`, `Sustainability`, `Talks`, `Wagtail`

## Grid-Aware Workers

The `workers/` directory contains a carbon-conscious edge computing experiment:

- **grid-aware/**: TypeScript library for grid-aware adaptations
- **grid-aware-worker/**: Cloudflare Worker that serves reduced pages during high-carbon grid periods

Run worker tests: `cd workers/grid-aware-worker && npm test`

## Design Conventions

- **Typography**: Fira Sans (Mozilla's typeface)
- **Color theme**: Adobe Kuler-based palette (see CONTRIBUTING.md)
- **Favicons**: Generated with realfavicongenerator.net
- **Icon font**: Custom Icomoon font

## CI/CD

GitHub Actions workflow:
1. Install Ruby + Node dependencies
2. Fetch GitHub repositories
3. Build site (`npm run dist`)
4. Deploy to GitHub Pages (on main branch only)

## Important Notes for Assistants

1. **Source-first**: Jekyll reads from `src/` (configured in `_config.yml`), not the repo root
2. **Resume generation**: Uses `jsonresume-theme-eloquent` from `raw/resume/export.js`
3. **Permalink structure**: `/:title` (no date in URLs)
4. **Paginate**: 5 posts per page at `/page/:num/`
5. **Build output**: Goes to `dist/`, not `_site/`
6. **Feed categories**: Only specific categories appear in RSS (see `feed.categories` in config)

## Dependencies to Watch

- **Ruby**: Jekyll, pygments.rb (syntax highlighting)
- **Node**: Prettier, jsonresume-theme-eloquent
- **Workers**: @greenweb/grid-aware-websites, wrangler

## Useful References

- `_config.yml` — All site settings
- `src/_layouts/` — Template inheritance
- `CONTRIBUTING.md` — Original setup docs (slightly outdated)
