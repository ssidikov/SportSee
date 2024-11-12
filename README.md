# SportSee ![logo](./src/assets/logo.svg)

SportSee is a dynamic sports coaching startup. This project focuses on building a responsive user profile page using **React**, where users can track their activity, including session counts and calories burned.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [🚀 Installation](#installation)
- [🛠️ Technologies Used](#technologies-used)
- [💻 Usage](#usage)
- [🌐 API Information](#api-information)
- [📊 Data Handling](#data-handling)

## Project Overview

This React-based project implements a user profile page that visualizes user activity data through interactive charts. The app connects to a Node.js backend for data retrieval.

## 🚀 Installation

### Prerequisites

Ensure you have **Node.js (v14 or higher)** and **npm/yarn** installed.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ssidikov/SportSee.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd SportSee
   ```

3. **Install dependencies**:

   ```bash
   npm install
   or
   yarn install
   ```

4. **Clone the backend repository** (if you're using the backend):

   ```bash
   git clone https://github.com/ssidikov/SportSee-backend.git
   ```

5. **Navigate to the backend directory** and install dependencies:

   ```bash
   cd SportSee-backend
   npm install
   or
   yarn install
   ```

6. **Start the backend server**:

   ```bash
   npm dev
   or
   yarn dev
   ```

7. **Start the frontend development server** (in the main project directory):

   ```bash
   npm start
   or
   yarn start
   ```

   If you are using the backend, visit [http://localhost:3001](http://localhost:3001) to view the app. Otherwise, visit [http://localhost:3000](http://localhost:3000).

## 🛠️ Technologies Used

- **React** – Core library for building the UI
- **React Router** – Client-side routing
- **Recharts** – For creating responsive charts
- **Sass** – Preprocessor for styling
- **Axios** – For HTTP requests

## 💻 Usage

- The app pulls user data from a backend server and visualizes it with charts.
- Switch between API and mock data using the **ApiToggleSwitch** component for development and testing flexibility.

## 🌐 API Information

### Available Endpoints

- **`GET /user/:id`** – Retrieves main user information
- **`GET /user/:id/activity`** – Retrieves user activity data
- **`GET /user/:id/average-sessions`** – Retrieves average session data
- **`GET /user/:id/performance`** – Retrieves user performance data

### Mock Data

Development is supported by a `serviceAPIMock.js` class that mimics API calls with the same response structure as the actual backend.

## 📊 Data Handling

- Custom **`useFetch()`** hook handles data fetching.
- API responses are standardized and formatted before being rendered to ensure consistent data handling across the app.
