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

### Running the Application

To run the application in development mode, execute the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

-   **User Authentication:** A robust authentication system using `next-auth` with support for different user roles.
-   **Role-Based Access Control:** The application supports different user roles, such as student, lecturer, and admin, with role-based UI elements and protected API routes.