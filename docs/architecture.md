# Architecture Overview

This document provides an overview of the technical architecture for the "Exam Pilot" application.

## Technology Stack

-   **Framework:** [Next.js](https://nextjs.org/) (React)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Authentication:** [NextAuth.js](https://next-auth.js.org/) (now Auth.js)
-   **AI:** [Google Gemini](https://ai.google.dev/)

## Project Structure

The project follows a standard Next.js App Router structure:

-   `docs/`: Contains all project documentation.
-   `public/`: Stores static assets like images and fonts.
-   `src/`: Contains the main application code.
    -   `app/`: The core of the Next.js application, containing all pages and API routes.
    -   `components/`: Reusable React components used throughout the application.
    -   `lib/`: Utility functions and mock data.
    -   `types/`: TypeScript type definitions and interfaces.
-   **Configuration Files:** The root directory contains all the necessary configuration files for Next.js, TypeScript, Tailwind CSS, etc.