# Consorient Website

## Company Overview
Consorient Solutions is an ICT and telecommunications infrastructure company focused on delivering reliable connectivity and technology systems. The company provides services such as network infrastructure deployment, fiber and tower solutions, enterprise IT support, cybersecurity, and power systems for mission-critical environments.

This project is the company website and includes pages for company profile, services, projects, partners, contact, and a dedicated quote questionnaire.

## Tech Stack
### Frontend (current)
- React 18
- Vite 5
- Tailwind CSS 3 (using `@apply` in modular CSS files)
- PostCSS + Autoprefixer
- JavaScript (JSX)

### Backend (planned)
- Node.js
- Recommended API layer: Express.js or NestJS
- Suggested modules:
  - Quote questionnaire submission endpoint
  - Contact form submission endpoint
  - Email notifications / CRM integration
  - Admin/reporting endpoints

## Project Structure
- `src/components` - shared UI parts (Navbar, Footer)
- `src/pages` - page-level React components
- `src/styles` - page/component CSS modules using Tailwind `@apply`

## Getting Started
### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Notes
- The quote flow is intentionally separated from the general contact page.
- Backend implementation will be added in a separate server module using Node.js.
