# Overview

This is a resume/portfolio website built as a full-stack application with a React frontend and Express backend. The application displays a professional resume for Ajeesh Nechully Gangadharan, a Staff-Level Platform Engineer, with sections for professional summary, skills, certifications, employment history, and education. The site is designed to be deployed to GitHub Pages and includes print-friendly styling for generating PDF resumes.

**Data Management**: All resume content is stored in a single JSON file (`client/public/resume.json`) for easy editing without code changes. The application fetches and displays this data dynamically using React Query.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- Uses React 18 with TypeScript for type safety and modern development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- Implements shadcn/ui component library based on Radix UI primitives
- Uses Tailwind CSS for utility-first styling with custom CSS variables for theming
- Component architecture follows the "New York" style variant from shadcn/ui
- Custom path aliases configured for clean imports (@/components, @/lib, @/hooks)

**Styling Strategy**
- Tailwind CSS with custom design tokens for colors, spacing, and typography
- CSS variables for dynamic theming support (light/dark modes prepared)
- Custom fonts: Inter for sans-serif, Georgia for serif, JetBrains Mono for monospace
- Print-specific styles for PDF generation capability

**State Management**
- React Query for async state and API interactions
- React hooks for local component state
- Toast notifications system for user feedback
- No global state management needed for current resume display use case

**Data Loading Strategy**
- Resume data is stored in `/client/public/resume.json` and fetched using React Query
- Custom hook `useResumeData` handles data fetching with loading state
- Data is loaded once at the page level and distributed to child components as props
- Components receive typed resume data props, eliminating need for hardcoded content
- Loading spinner displays during data fetch

## Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Vite middleware integration for development with HMR
- Static file serving for production builds
- Structured for API routes under `/api` prefix

**Development vs Production**
- Development: Vite dev server with middleware mode for seamless React integration
- Production: Pre-built static files served by Express
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)

**Data Layer Design**
- In-memory storage implementation (MemStorage class) as placeholder
- Storage interface pattern allows easy swapping to database implementation
- Designed for PostgreSQL integration with Drizzle ORM (schema defined but not actively used)

**API Structure**
- RESTful API design prepared but minimal routes implemented
- Request logging middleware for development debugging
- JSON body parsing with raw body preservation for webhook support
- Error handling and response formatting utilities

## Database Schema (Prepared but Not Active)

**ORM Choice: Drizzle**
- Type-safe SQL query builder with excellent TypeScript integration
- Schema-first approach with automatic type inference
- Configured for PostgreSQL dialect with Neon serverless driver
- Migration support via drizzle-kit

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Zod validation schemas for type-safe data insertion
- Schema located in shared directory for use by both client and server

**Note**: The application currently uses in-memory storage. The database schema and Drizzle configuration are prepared for future enhancement but not actively used in the current resume display functionality.

## External Dependencies

**UI Component Libraries**
- @radix-ui/* - Headless UI primitives for accessible components (accordion, dialog, dropdown, etc.)
- embla-carousel-react - Touch-friendly carousel component
- lucide-react - Icon library for consistent iconography
- class-variance-authority - Type-safe component variant styling
- cmdk - Command menu component (prepared but not used)

**Form Handling**
- react-hook-form - Performant form validation (prepared via @hookform/resolvers)
- zod - TypeScript-first schema validation
- drizzle-zod - Integration between Drizzle schema and Zod validators

**Database & Storage** (Prepared for Future Use)
- @neondatabase/serverless - PostgreSQL serverless driver for Neon
- drizzle-orm - Type-safe ORM with PostgreSQL support
- connect-pg-simple - PostgreSQL session store (prepared but not used)

**Utility Libraries**
- date-fns - Modern date utility library
- nanoid - Unique ID generation
- clsx & tailwind-merge - Conditional CSS class composition

**Development Tools**
- @replit/vite-plugin-* - Replit-specific development enhancements
- tsx - TypeScript execution for Node.js
- esbuild - Fast JavaScript bundler for production server build

**Authentication** (Infrastructure Prepared)
- Session management structure in place via connect-pg-simple
- User schema defined but no authentication routes implemented
- Designed for future password-based or OAuth integration

**Deployment**
- Configured for GitHub Pages static deployment with base path `/ajeesh.github.io/`
- Build command includes `--base=/ajeesh.github.io/` flag for proper asset loading on GitHub Pages
- Vite builds optimized production bundle to dist/public
- GitHub Actions workflow (`.github/workflows/deploy.yml`) automates deployment
- Express server bundles separately for potential dynamic hosting