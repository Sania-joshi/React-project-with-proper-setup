# React Router with Lazy Loading Project

This workspace contains a React application demonstrating routing with lazy loading and Suspense for optimal performance.

## Project Overview

A modern React application featuring:
- Client-side routing with React Router DOM
- Lazy loading using React.lazy() and code splitting
- Suspense fallback UI for smooth loading experience
- Responsive design with modern CSS
- Contact form with form state management
- Clean, organized component structure

## Project Setup

Run the following commands to get started:

```bash
npm install
npm start
```

## Key Features

- **Multiple Pages**: Home, About, and Contact pages
- **Lazy Loading**: Each page is loaded only when visited
- **Suspense Boundary**: Loading spinner while components load
- **Navigation**: Smooth client-side routing without page reloads
- **Responsive UI**: Works on all device sizes
- **Form Handling**: Contact form with validation

## File Structure

```
src/
├── components/
│   ├── Navigation.jsx        - Navigation bar with links
│   ├── Navigation.css        - Navigation styles
│   ├── LoadingSpinner.jsx    - Loading fallback component
│   └── LoadingSpinner.css    - Spinner animation styles
├── pages/
│   ├── Home.jsx              - Home page (lazy loaded)
│   ├── About.jsx             - About page (lazy loaded)
│   ├── Contact.jsx           - Contact page with form
│   └── PageStyles.css        - All page styles
├── App.js                    - Main app with routing
├── App.css                   - App container styles
└── index.js                  - React entry point
```

## Technologies

- React 18+
- React Router DOM 6+
- React.lazy() for code splitting
- React Suspense for async loading
- CSS3 for styling

## Development

Run `npm start` to launch the development server on http://localhost:3000

## Production Build

Run `npm run build` to create an optimized production build

---

For detailed information, see README.md
