# React Feature Flag Demo

This repository contains a minimal React application scaffolded without external tooling so you can begin experimenting with feature flags right away.

## Prerequisites

Make sure you have a current LTS version of [Node.js](https://nodejs.org/) installed. The project uses npm scripts, but you can substitute another package manager if you prefer.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Run the test suite:
   ```bash
   npm test
   ```

The entry point for the UI is the `HomePage` component (`src/components/HomePage.js`). Update this component as you integrate your feature flag provider and experiment with conditional rendering.

## Building for Production

Create an optimized production build with:

```bash
npm run build
```

This outputs static assets to the `build/` directory, which can be deployed to your preferred hosting service.
