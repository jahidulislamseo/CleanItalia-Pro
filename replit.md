# Overview

This is a full-stack Italian cleaning services website built with React, Express, and TypeScript. The application provides information about professional cleaning services across major Italian cities including commercial cleaning, car wash self-service, domestic services, construction cleaning, sanitization, and custom contracts. The site features a multi-page architecture with dedicated pages for different services and locations, contact forms for lead generation, and a modern, responsive design using Italian-themed styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA** with Wouter for client-side routing
- **TypeScript** for type safety throughout the frontend
- **Vite** as the build tool and development server
- **Tailwind CSS** for utility-first styling with custom Italian color scheme variables
- **shadcn/ui** component library for consistent UI components
- **React Hook Form** with Zod validation for form handling
- **TanStack Query** for server state management and API calls

## Backend Architecture  
- **Express.js** server with TypeScript
- **RESTful API** design with dedicated endpoints for contact and quote requests
- **In-memory storage** as the default data layer (MemStorage class)
- **Zod schemas** for request validation shared between frontend and backend
- **Middleware** for request logging and error handling

## Data Storage Strategy
- **Shared schema definitions** in TypeScript using Drizzle ORM schema format
- **PostgreSQL-ready** database schema with UUID primary keys and timestamps
- **Drizzle ORM** configured for future database integration
- **In-memory fallback** storage for development/testing without database setup

## Form Handling & Validation
- **Dual form system**: Contact forms and quote request forms
- **Zod validation** with shared schemas between client and server
- **React Hook Form** integration for client-side form management
- **Toast notifications** for user feedback on form submissions

## Styling & Design System
- **Italian color palette** with CSS custom properties for blue, green, gold, and red
- **Responsive design** with mobile-first approach
- **shadcn/ui** component system for consistent styling
- **Custom Tailwind configuration** with Italian theme extensions

## SEO & Content Strategy
- **Multi-city targeting** with dedicated location pages for major Italian cities
- **Service-specific pages** for different cleaning service types
- **SEO component** for dynamic meta tags and Open Graph data
- **Italian language content** throughout the application

# External Dependencies

## Frontend Libraries
- **@tanstack/react-query** for server state management and caching
- **wouter** for lightweight client-side routing
- **react-hook-form** with **@hookform/resolvers** for form handling
- **@radix-ui** component primitives for accessible UI components
- **tailwindcss** for utility-first CSS framework
- **zod** for runtime type validation
- **lucide-react** for consistent iconography

## Backend Dependencies
- **express** for the web server framework
- **drizzle-orm** for database schema definition and potential future queries
- **@neondatabase/serverless** for PostgreSQL connectivity when database is added
- **zod** for request validation (shared with frontend)

## Development Tools
- **vite** for fast development and building
- **typescript** for static type checking
- **tsx** for TypeScript execution in development
- **esbuild** for production server bundling

## Database (Future Integration)
- **PostgreSQL** database ready via Drizzle configuration
- **Neon Database** serverless PostgreSQL for cloud deployment
- **Drizzle Kit** for database migrations and schema management

## Deployment & Platform
- **Replit** development environment integration
- **Node.js** runtime environment
- **ESM modules** throughout the codebase