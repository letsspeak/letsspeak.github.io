# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages personal website/portfolio repository (`letsspeak.github.io`). The site contains:

- Personal resume/CV in Japanese located at `docs/resume.md`
- Static site served via GitHub Pages

## Architecture

- **Static Site**: Uses GitHub Pages for hosting
- **Content Structure**: 
  - `docs/` - Contains markdown content files
  - `docs/resume.md` - Japanese resume/CV document
- **Version Control**: Git with `.gitignore` excluding `docs/resume.md` from commits

## Common Commands

Since this is a static GitHub Pages site, typical development involves:

```bash
# View repository status
git status

# Add and commit changes
git add .
git commit -m "Update content"

# Push to publish via GitHub Pages
git push origin master
```

## Content Management

- Resume content is maintained in `docs/resume.md` in Japanese
- The resume includes technical skills, project experience, and career history
- Personal information is excluded from version control via `.gitignore`