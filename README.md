# Cancer Care Hub - Connect App

A React/TypeScript application for cancer care management, designed to be previewed in v0's interface and deployed to davidlennard.com/cancer/cch.

## Features

- Home page with portal cards for navigation
- Detailed pages for different aspects of cancer care
- Dark mode support with theme toggle
- Responsive design for all device sizes
- SOS emergency button
- Interactive UI elements

## Project Structure

- `src/` - Source code directory
  - `components/` - React components
  - `App.tsx` - Main application component with state-based navigation
  - `main.tsx` - Application entry point
  - `style.css` - Global styles
- `index.html` - HTML entry point
- Configuration files (package.json, tsconfig.json, vite.config.ts)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

### Development

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

This will start the development server at http://localhost:5173/

### Building for Production

Build the project for production:

\`\`\`bash
npm run build
\`\`\`

This will create a `dist` directory with the compiled assets.

### Preview Production Build

Preview the production build locally:

\`\`\`bash
npm run preview
\`\`\`

## Deployment

To deploy to davidlennard.com/cancer/cch:

1. Build the project: `npm run build`
2. Upload the contents of the `dist` directory to the `/cancer/cch/` folder on your web server

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3

## License

This project is licensed under the MIT License.
