# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese personal portfolio website built with Astro 5, featuring a hybrid styling approach using both PandaCSS for component styling and traditional CSS for layout. The site includes sections for about, skills, works, articles, contact, and an anime recommendation page with dynamic filtering.

## Essential Commands

```bash
# Development
npm run dev                 # Start dev server at localhost:4321
npm run build              # Build production site to ./dist/
npm run preview            # Preview build locally
npm run prepare            # Generate PandaCSS system (required after changes)
npm run astro check        # Type checking with Astro

# Testing (if needed)
npx playwright test        # Run Playwright tests
```

## Architecture & Key Concepts

### Styling System
- **PandaCSS**: Used for component-level styling via `css()` function imported from `styled-system/css`
- **Traditional CSS**: Used in Layout.astro and global styles for overall page structure
- **Configuration**: `panda.config.ts` outputs to `styled-system/` directory
- **Critical**: Run `npm run prepare` after making changes to regenerate PandaCSS system

### Content Management
- **Astro Content Collections**: Configured in `src/content/config.ts`
- **Anime Data**: Stored as YAML in `src/content/anime/main.yaml` with schema validation
- **Blog Posts**: Markdown files in `src/content/posts/` (posts collection defined in astro.config.mjs)
- **Data Structure**: Anime entries include title, watchedDate, watchCount, genres[], comment

### Component Architecture
- **Layout Pattern**: `Layout.astro` provides consistent page structure with Header/Footer
- **Section Components**: Atomic design with `Section.astro` and `SectionContent.astro` wrappers
- **Specialized Components**: Individual work items in `src/components/Works/`
- **Page Components**: Main sections like `AboutSection.astro`, `SkillsSection.astro` imported into pages

### Interactive Features
- **Anime Page**: Client-side filtering and sorting using vanilla JavaScript with Astro's `define:vars`
- **Dynamic Styling**: CSS injected via JavaScript for anime cards (avoiding build-time issues)
- **React Integration**: Available via `@astrojs/react` for complex interactions

### File Organization
```
src/
├── content/           # Content collections (anime, posts)
├── components/        # Reusable components
│   ├── Atoms/         # Basic building blocks
│   ├── Works/         # Individual project components  
│   └── Sns/           # Social media icons
├── layouts/           # Page layouts
├── pages/             # Route-based pages
└── styles/            # Global CSS files
```

## Important Technical Details

### Content Collection Usage
- Use `getEntry('anime', 'main')` to access anime data
- Schema validation ensures data consistency
- YAML arrays are typed as arrays in collection definition

### Anime Data Guidelines
- **Date Format**: Use YYYY-MM-DD strings for watchedDate
- **Validation**: Dates must be realistic (after anime broadcast, not future dates)
- **Sorting**: Default sort is by watchedDate descending (most recent first)

### PandaCSS Integration
- Import: `import { css } from '../../styled-system/css'`
- Usage: `class={css({ padding: '4', color: 'blue.500' })}`
- Responsive: `{ base: 'value', md: 'other' }` syntax for breakpoints

### React Integration Notes
- Configured in astro.config.mjs with SSR external handling for react-icons
- Use for complex state management when Astro's built-in reactivity isn't sufficient

## Development Workflow

1. **New Components**: Create in appropriate subdirectory under `src/components/`
2. **Styling**: Use PandaCSS `css()` for component styles, traditional CSS for layout
3. **Content Updates**: Modify YAML/Markdown files in `src/content/`
4. **After PandaCSS Changes**: Always run `npm run prepare` to regenerate system
5. **Testing**: Use dev server for hot reload, `npm run build` for production validation

## Japanese Language Support
- Site language is set to "ja" in Layout.astro
- Fonts: Noto Sans JP (variable), Zen Kaku Gothic New, Varela Round
- Text sorting uses `localeCompare()` with 'ja' locale for proper Japanese ordering