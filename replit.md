# Overview

This is a full-stack web application built as a digital resume/portfolio for Ajeesh Nechully Gangadharan, a Staff-Level Platform Engineer. The application is built using React for the frontend and Express.js for the backend, with Vite handling the development environment and build process. The resume data is stored in a JSON file and rendered through a React component with custom styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack**: React with TypeScript, Vite as the build tool

**Design Decision**: Single Page Application (SPA) architecture
- **Problem**: Need to display resume information in a clean, maintainable format
- **Solution**: React component-based architecture with data-driven rendering from JSON
- **Rationale**: Separates presentation logic from data, making updates easy without code changes

**Styling Approach**: Custom CSS with utility classes
- **Problem**: Need professional, print-friendly styling for resume display
- **Solution**: Vanilla CSS with BEM-like class naming conventions
- **Pros**: No external CSS framework overhead, full control over styling, better performance
- **Cons**: More manual work for responsive design and cross-browser compatibility

**Component Design**: Single root component (App.tsx) rendering all sections
- Data loaded from static JSON file (`resume.json`)
- Type-safe data access using TypeScript inference
- Sections include: header, professional summary, skills, certifications, experience, and education

## Backend Architecture

**Technology Stack**: Express.js with TypeScript running on Node.js

**Server Architecture**: Minimal API server with Vite integration
- **Problem**: Need to serve the React application in both development and production
- **Solution**: Express server with Vite middleware in development, static file serving in production
- **Rationale**: Unified server approach for both environments with HMR support in development

**Middleware Pipeline**:
1. JSON body parser with raw body capture (for potential webhook verification)
2. URL-encoded body parser
3. Custom request logging middleware for API routes
4. Vite development middleware (dev mode only)
5. Static file serving (production mode)

**Request Logging**: Custom middleware that tracks request duration and responses
- Logs API requests with method, path, status code, duration, and response preview
- Truncates long log lines to 80 characters for readability
- Only logs routes starting with `/api` to reduce noise

**Development vs Production**:
- Development: Vite middleware handles HMR and module resolution
- Production: Compiled assets served from `dist/public` directory
- Build process uses esbuild for server bundling and Vite for client bundling

## Data Storage

**Current Implementation**: Static JSON file (`client/src/resume.json`)
- **Problem**: Need to store and display resume information
- **Solution**: Type-safe JSON data file imported directly into React components
- **Pros**: Simple, fast, no database overhead, version-controlled data
- **Cons**: Requires rebuild/redeploy for data updates, not suitable for dynamic content

**Database Infrastructure (Configured but Unused)**:
- Drizzle ORM configured for PostgreSQL via Neon serverless
- Session storage setup with `connect-pg-simple`
- **Rationale for setup**: Prepared for potential future features like contact forms, analytics, or CMS capabilities

## Build and Development Pipeline

**Module System**: ES Modules (ESM) throughout the entire stack
- Both client and server use `"type": "module"` in package.json
- Consistent import/export syntax across the codebase

**TypeScript Configuration**:
- Path aliases: `@/*` for client source, `@shared/*` for shared types
- Strict mode enabled for type safety
- Module resolution set to "bundler" for modern tooling compatibility

**Build Process**:
1. Vite builds React app to `dist/public`
2. esbuild bundles Express server to `dist/index.js`
3. External packages not bundled on server (uses node_modules at runtime)

**Development Workflow**:
- Hot Module Replacement (HMR) via Vite
- TypeScript compilation checking with `tsc`
- Database schema push with Drizzle Kit

# External Dependencies

## Core Framework Dependencies

- **React 18+**: UI library for component-based frontend
- **Express.js**: Web server framework for API and static file serving
- **TypeScript**: Type safety across the entire stack
- **Vite**: Build tool and development server with HMR support

## UI Component Library

- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
  - Includes: Dialog, Dropdown, Tabs, Toast, Tooltip, Select, and 20+ other components
  - **Rationale**: Production-ready accessibility, headless design allows custom styling
  - Currently imported but not actively used in the resume display

## State Management and Data Fetching

- **TanStack Query (React Query)**: Server state management and data fetching
  - Configured but not currently utilized
  - **Rationale**: Prepared for future API integration and dynamic data needs

## Utility Libraries

- **class-variance-authority (CVA)**: Utility for creating variant-based component APIs
- **clsx**: Conditional className composition
- **cmdk**: Command menu interface (imported but unused)
- **date-fns**: Date manipulation and formatting
- **zod** (via drizzle-zod): Runtime type validation and schema validation
- **nanoid**: Unique ID generation

## Database and ORM

- **Drizzle ORM**: Type-safe SQL query builder
- **@neondatabase/serverless**: Neon Postgres serverless driver
  - Supports connection pooling and edge computing environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools

- **tsx**: TypeScript execution engine for development server
- **esbuild**: Fast JavaScript/TypeScript bundler for production server
- **Replit plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

## Build Considerations

The application is configured for deployment on Replit with specialized plugins that only load in development mode when `REPL_ID` environment variable is present. The production build creates a self-contained application with bundled server code and static client assets.