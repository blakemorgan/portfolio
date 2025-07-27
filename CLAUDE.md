# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15.4.4 portfolio website using the App Router architecture with the following structure:

- **Framework**: Next.js with App Router (src/app directory)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to `./src/*`)

### Key Files and Structure

- `src/app/layout.tsx`: Root layout with SEO metadata and font configuration
- `src/app/page.tsx`: Main homepage importing all portfolio sections
- `src/app/globals.css`: Global CSS with customizable color system and animations
- `src/components/`: All React components (Header, Hero, About, Experience, Gallery, Contact, Footer)
- `src/config/portfolio.ts`: Centralized configuration for easy content customization
- `public/`: Static assets including photos and resume
- `private-assets/`: Original assets folder (not web-accessible)

### Technology Stack

- **React**: 19.1.0
- **Next.js**: 15.4.4 with App Router
- **TypeScript**: Strict configuration
- **Tailwind CSS**: v4 with PostCSS integration
- **Fonts**: Geist font family optimized with next/font

The project is now a complete portfolio website for Blake Morgan, a professional performer and music director. The site features a modern, responsive design with customizable colors and content.

## Portfolio Features

### Customizable Color System
- Primary (Blue), Secondary (Green), and Accent (Orange) color scheme
- All colors defined as CSS variables in `globals.css` for easy modification
- Supports both light and dark modes

### Content Sections
1. **Hero**: Profile photo, name, title, key skills, and call-to-action buttons
2. **About**: Bio, physical stats, musical info, education, and skill categories
3. **Experience**: Theatre and music credits with company information
4. **Gallery**: Photo gallery with lightbox functionality
5. **Contact**: Contact form, information, and social links
6. **Footer**: Site links and additional contact details

### Template Features
- All content centralized in `src/config/portfolio.ts` for easy customization
- Responsive design optimized for desktop and mobile
- SEO optimized with proper meta tags and OpenGraph data
- Professional animations and hover effects
- Accessibility features with ARIA labels

### Asset Management
- Photos stored in `public/` directory for web access
- Original assets in `private-assets/` folder
- Resume accessible at `/Resume.pdf`
- Easy asset replacement system