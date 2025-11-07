# DORA AI Paradox Book Club

Understanding the tension between individual AI productivity gains and organizational DevOps stability costs.

## Quick Start

```bash
npm install
npm run build    # Generate static site
npm run dev      # Start dev server with live reload (http://localhost:3000)
npm run lint     # Validate HTML, CSS, JavaScript
npm run format   # Auto-format code
```

## Project Structure

- **`content/`** - Core reading materials
  - `DORA_AI_Paradox.md` - Main book club document and schedule
  - `DORA_AI_Paradox_Facilitator_Guide.md` - Discussion guide for facilitators
  - `The_AI_Paradox_Visual_Summary.md` - Key findings and diagrams

- **`meetings/`** - Per-meeting materials
  - `meeting0.md` through `meeting3.md` - Discussion content and prep for each session

- **`docs/`** - Generated static site (built from markdown)
  - `index.html` - Tabbed interface for browsing all content
  - `style.css`, `main.js` - Frontend functionality

- **`resources/`** - Reference materials
  - `extractions/` - Text excerpts from the DORA 2024 Accelerate Report

## What This Project Is

A structured study materials site for exploring the 2024 DORA Accelerate State of DevOps Report, with focus on the paradox: while AI tools dramatically increase individual developer productivity, they correlate with decreased organizational stability and deployment frequency.

The site presents content in a tabbed interface, organized by meeting sessions and supporting materials for facilitators.

## Development

### Technology

- **Build**: Node.js + markdown-it (Markdown → HTML conversion)
- **Dev Server**: BrowserSync with live reload
- **Linting**: html-validate, stylelint, eslint
- **Formatting**: Prettier

### Development Workflow

1. Edit markdown files in `content/` or `meetings/`
2. Run `npm run dev` to start the dev server
3. Site rebuilds automatically on file changes
4. Browser reloads automatically

### Quality Standards

- HTML validated against semantic standards
- CSS follows BEM (Block, Element, Modifier) methodology
- JavaScript linted with ESLint:recommended
- All code auto-formatted with Prettier

## Deployment

The site is deployed to GitHub Pages. The `docs/` directory is generated and not committed to version control.

To deploy:
```bash
npm run build
git add docs/
git commit -m "build: Regenerate static site"
git push
```

## Media Resources

Media files (podcasts, slides, videos) are stored in an AWS S3 bucket:
- **Bucket**: `dora-ai-paradox-bookclub-2024` (us-east-1 region)
- **Local staging**: `media/` folder (excluded from git)

Upload files to S3:
```bash
aws s3 cp media/your-file s3://dora-ai-paradox-bookclub-2024/path/your-file
```

## Further Reading

- [GEMINI.md](GEMINI.md) - Architecture and quality standards documentation
- [2024 DORA Accelerate State of DevOps Report](https://cloud.google.com/devops/state-of-devops)
