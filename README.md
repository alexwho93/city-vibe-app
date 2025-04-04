# City Vibe App ✨

<!-- Optional: Add a concise, professional banner or logo -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

City Vibe is a modern web application built with **Next.js (App Router)** designed to help users **explore, save, and share their favorite urban destinations**. It allows users to discover the unique atmosphere of cities around the globe, find local hotspots, and experience the authentic pulse of each destination.

This project serves as a practical demonstration of full-stack development skills utilizing a **React (v19 RC)** frontend with **Material UI (MUI)**, a **Next.js** backend/API layer, **Prisma ORM** for database interaction (using **SQLite** for ease of setup), and **NextAuth.js (v5 Beta)** for authentication.

**Live Demo:** [**https://city-vibe-app.vercel.app/**](https://city-vibe-app.vercel.app/)

## Features 🚀

*   **City Discovery:** Browse and explore information about various cities (e.g., Popular Cities list).
*   **User Authentication:** Secure user sign-up and login functionality provided by NextAuth.js v5.
*   **Personalized Experience:** Displays a welcome message to logged-in users.
*   **Modern Frontend:** Built with the latest React (v19 RC) and Next.js 15 (App Router), styled with Material UI v6 for a clean and responsive user interface.
*   **Efficient Data Fetching:** Uses SWR for client-side data fetching and caching.
*   **Database Integration:** Uses Prisma ORM connected to a SQLite database for managing application data.
*   **(Planned/In Development):** Map integration using Mapbox GL JS, saving favorite destinations, sharing features. *(Adjust based on actual implemented features)*

## Tech Stack 🛠️

*   **Framework:** Next.js 15 (App Router)
*   **Frontend:** React 19 (RC), Material UI (MUI) v6, Emotion, SWR, Mapbox GL JS
*   **Backend:** Next.js API Routes
*   **Database:** SQLite
*   **ORM:** Prisma
*   **Authentication:** NextAuth.js v5 Beta (@auth/prisma-adapter)
*   **Styling:** Material UI (MUI) v6, Emotion, Global CSS
*   **Build/Development:** Turbopack (via `next dev --turbopack`), npm
*   **Linting:** ESLint (with `eslint-config-next`)

## Getting Started ⚙️

### Prerequisites

*   Node.js (v18 or later recommended, check Next.js 15 requirements)
*   npm (comes with Node.js)
*   Git

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/alexwho93/city-vibe-app.git
    cd city-vibe-app
    ```

2.  **Install dependencies:**
    *(This will also automatically run `prisma generate` due to the `postinstall` script)*
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   Create a `.env` file in the root of the project.
    *   Add the necessary environment variables. At minimum, you'll likely need an `AUTH_SECRET` for NextAuth.js. Refer to NextAuth.js documentation for other provider-specific variables if you add OAuth.
    *   Example `.env` content:
        ```dotenv
        # Generate a strong secret using: openssl rand -base64 32
        AUTH_SECRET="YOUR_STRONG_RANDOM_SECRET_HERE"

        # Prisma uses the DATABASE_URL from schema.prisma by default for SQLite
        # DATABASE_URL="file:./dev.db" # Usually not needed in .env for SQLite default

        # Add any other API keys or secrets needed (e.g., Mapbox Token if used client-side)
        # NEXT_PUBLIC_MAPBOX_TOKEN="YOUR_MAPBOX_ACCESS_TOKEN"
        ```
    *   **Note:** You might need to create a `.env.example` file in your repo to show *which* variables are needed, without committing your actual secrets.

4.  **Initialize and migrate the database:**
    *   This command will create the SQLite database file (`./prisma/dev.db` by default) and apply your schema.
    ```bash
    npx prisma migrate dev --name init
    ```
    *(You can replace `--name init` with a more descriptive migration name if preferred)*

## Running the Application ▶️

1.  **Start the development server (with Turbopack):**
    ```bash
    npm run dev
    ```

2.  **Access the application:**
    *   Open your browser and navigate to `http://localhost:3000`.

## Project Status & Future Enhancements

*   **Status:** In Development (v0.1.0) - Core features like authentication, basic city display, and main layout are implemented.
*   **Potential Future Features:**
    *   Implement map view using Mapbox GL JS to visualize cities/venues.
    *   Add functionality for users to save favorite cities/locations.
    *   Implement search and filtering capabilities.
    *   Develop user profiles and sharing features.
    *   Add integration with external APIs for richer city data (e.g., events, weather).
    *   Write unit and integration tests.

## License 📄

This project is likely intended for personal portfolio use. If you wish to make it open source, choose a license.
*Example:* This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. *(Remember to add a `LICENSE` file if you choose one)*. Otherwise, state: *Source code is available for review, but please contact the author for usage rights.*
