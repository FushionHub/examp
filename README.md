# Exam Pilot

This is the official repository for the Exam Pilot application, an AI-driven educational platform and social network for Nigerian students preparing for JAMB, WAEC, and NECO exams.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/your_repository.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Configuration

To use the AI features, you need to add your Google API key to a local environment file.

1.  Create a file named `.env.local` in the root of the project.
2.  Add the following line to the file, replacing `your_api_key` with your actual key:
    ```
    GOOGLE_API_KEY=your_api_key
    ```

### Running the Application

To run the application in development mode, execute the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

-   **User Authentication:** A robust authentication system using `next-auth` with support for different user roles.
-   **Role-Based Access Control:** The application supports different user roles, such as student, lecturer, and admin, with role-based UI elements and protected API routes.
-   **AI-Powered Explanations:** The CBT results page can generate detailed, AI-powered explanations for exam answers using Google's Gemini model.
