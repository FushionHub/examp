# API Documentation

This document provides details on the API routes that have been implemented in the "Exam Pilot" application.

## Authentication

### `POST /api/auth/[...nextauth]`

-   **Description:** Handles all authentication requests (sign-in, sign-out, etc.) using NextAuth.js.
-   **Request Body:** Varies depending on the authentication provider. For credentials, it expects `email` and `password`.
-   **Response:** Varies depending on the request.

## AI

### `POST /api/ai/generate-explanation`

-   **Description:** Generates a detailed explanation for a CBT exam answer using Google's Gemini model.
-   **Request Body:**
    ```json
    {
      "question": "The question text",
      "answer": "The correct answer"
    }
    ```
-   **Response:**
    ```json
    {
      "explanation": "The AI-generated explanation."
    }
    ```

## Content Management (Lecturer)

### `POST /api/posts`

-   **Description:** Creates a new blog post. (Placeholder logic)
-   **Authentication:** Requires 'lecturer' or 'blogger' role.
-   **Request Body:**
    ```json
    {
      "title": "Post title",
      "excerpt": "A brief excerpt",
      "content": "The full content of the post"
    }
    ```

### `DELETE /api/posts/[id]`

-   **Description:** Deletes a blog post. (Placeholder logic)
-   **Authentication:** Requires 'lecturer', 'blogger', or 'admin' role.

### `POST /api/tutorials`

-   **Description:** Creates a new tutorial. (Placeholder logic)
-   **Authentication:** Requires 'lecturer' role.
-   **Request Body:**
    ```json
    {
      "title": "Tutorial title",
      "subject": "The subject of the tutorial",
      "description": "A brief description",
      "content": "The full content of the tutorial"
    }
    ```

### `DELETE /api/tutorials/[id]`

-   **Description:** Deletes a tutorial. (Placeholder logic)
-   **Authentication:** Requires 'lecturer' or 'admin' role.

## Social Network

### `POST /api/social/posts`

-   **Description:** Creates a new social post. (Placeholder logic)
-   **Authentication:** Requires authentication.
-   **Request Body:**
    ```json
    {
      "content": "The content of the post"
    }
    ```

### `POST /api/social/posts/[id]/like`

-   **Description:** Likes or unlikes a social post. (Placeholder logic)
-   **Authentication:** Requires authentication.

### `POST /api/social/posts/[id]/comment`

-   **Description:** Adds a comment to a social post. (Placeholder logic)
-   **Authentication:** Requires authentication.
-   **Request Body:**
    ```json
    {
      "content": "The content of the comment"
    }
    ```