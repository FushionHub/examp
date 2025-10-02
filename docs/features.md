# Implemented Features

This document provides a breakdown of the features that have been implemented in the "Exam Pilot" application so far.

## Core Features

-   **User Authentication:**
    -   A robust authentication system using NextAuth.js.
    -   Supports email/password login with mock user data.
    -   Includes sign-in and sign-up pages.
    -   Protected routes using middleware.

-   **Role-Based Access Control (RBAC):**
    -   Support for different user roles (student, lecturer, admin).
    -   Role-based UI elements (e.g., "Create Post" button for lecturers).
    -   Protected API routes based on user roles.
    -   Placeholder for admin role-switching functionality.

-   **CBT (Computer Based Test) Section:**
    -   Practice exam questions with a clean, intuitive interface.
    -   Navigation between questions.
    -   A countdown timer.
    -   Score tracking and a results page with a detailed answer breakdown.
    -   AI-powered explanations for answers using Google's Gemini model.

-   **Tutorials Section:**
    -   A dedicated page to list all available tutorials, categorized by subject.
    -   A page to view the full content of a single tutorial, with support for text, images, and video.

-   **News/Blog Section:**
    -   A page to display a list of all blog posts.
    -   A page to view the full content of a single blog post.

-   **Student Social Network:**
    -   A main social feed to display posts from all users.
    -   Dynamic user profile pages.
    -   Functionality for creating posts, liking posts, and commenting on posts (with placeholder backend logic).

-   **Syllabus Section:**
    -   A page to display the syllabus for different exams and subjects.