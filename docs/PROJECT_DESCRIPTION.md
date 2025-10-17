# Project Description

## Overview

This is a personal portfolio website for Michael Han (Byong Cheol Han / 한병철 / 韩秉澈). The website showcases professional experience, projects, and career journey in an interactive and visually engaging manner.

## What This Project Has

### Pages

- **Home Page** (`/`)
  - Dynamic name transformer displaying multiple name variations (English, Korean, Chinese)
  - Personal introduction and professional summary
  - Quick links to projects and career journey sections
  - Social media links

- **Projects Page** (`/projects`)
  - Filterable project gallery by domains (Frontend, Backend, Mobile, Blockchain, etc.)
  - Filterable by technologies (React, TypeScript, Python, etc.)
  - Project cards with descriptions and images
  - Individual project detail pages with full descriptions, images, lessons learned, and achievements

- **Career Page** (`/career`)
  - Interactive timeline of professional experience
  - Career progression from military service to current roles
  - Links between career experiences and related projects
  - Multiple concurrent positions displayed (full-time, freelance, self-employed ventures)

### Key Features

- **Interactive Project Filtering**: Users can filter projects by domain (Frontend, Backend, Mobile, DevSecOps, etc.) and technology stack
- **Career Timeline**: Visual timeline showing career progression with expandable details for each position
- **Project Portfolio**: Comprehensive showcase of professional and personal projects including:
  - Digital Signage systems
  - Renewable Energy Trading platforms
  - VIP Loyalty programs
  - Aircraft Component Management systems
  - Blockchain/NFT projects
  - E-commerce platforms
  - Mobile applications (Pocket Chiro)
  - Developer community initiatives (HK Developer Network)

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- **Dark/Light Mode Support**: Theme switching capability
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Smooth Animations**: Fade-in effects and transitions throughout the site
- **Analytics Integration**: Vercel Analytics for tracking visitor behavior

### Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Image Carousel**: Embla Carousel
- **Fonts**: Geist (Vercel's font family)
- **Deployment**: GitHub Pages
- **Analytics**: Vercel Analytics

### Component Structure

The project follows an atomic design methodology:

- **Atoms**: Small, reusable components (filter chips, logos, social icons, badges)
- **Molecules**: Composite components (navigation menu, project cards, social links, text transformer)
- **Organisms**: Complex sections (career timeline, navigation, footer, tech stack diagram, image carousel)
- **Templates**: Page-level layouts (home template)

### Data Management

- Project data managed in `lib/projects.ts` with comprehensive project information
- Career timeline data in `lib/careerTimeline.ts` with position history
- Constants and configuration in `lib/constants.ts`
- Type-safe data structures with TypeScript interfaces
