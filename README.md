# Madhu Computer Center

A website for Madhu Computer Center, a local digital service and computer training center in Janai, Hooghly, West Bengal. It introduces the center, its services and courses, and provides contact information.

## Features

- Overview of government, online, travel, documentation, and computer services
- Computer course listings, including basic computing, MS Office, typing, and Tally
- About, gallery, testimonials, and contact sections
- Responsive interface built with reusable React components
- Server-rendered routing with TanStack Start

## Tech stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Radix UI and Lucide icons

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format project files with Prettier |

## Project structure

```text
src/
├── assets/              # Images used by the website
├── components/
│   ├── sections/        # Homepage content sections
│   └── ui/              # Reusable interface components
├── data/site.ts         # Services, courses, testimonials, and contact details
├── routes/              # TanStack Router routes
├── router.tsx           # Router setup
└── styles.css           # Global styles
```

The homepage is defined in `src/routes/index.tsx`. Edit `src/data/site.ts` to update the services, courses, testimonials, or contact information shown on the site.

## Build

Create a production build with:

```bash
npm run build
```

Then preview it locally with:

```bash
npm run preview
```
