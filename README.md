# Todo App

A very simple todo application with a React frontend and Node.js/Express backend.

## Project Structure

```
├── backend/
│   ├── package.json    # backend dependencies
│   ├── server.js       # express server with CRUD APIs
│   └── data.json       # file-based todo storage
├── frontend/
│   ├── package.json    # frontend dependencies
│   ├── vite.config.js  # vite config
│   ├── index.html      # html entry point
│   └── src/
│       ├── main.jsx    # react entry point
│       ├── App.jsx     # page router (decides which page to show)
│       ├── App.css     # simple styles
│       ├── TodoList.jsx  # todo list page
│       └── TodoPage.jsx  # single todo detail page
├── README.md           # this file
└── DOCS.md             # feature documentation
```

## Setup Instructions

You need Node.js installed on your computer.

### 1. Start the backend

```bash
cd backend
npm install
npm start
```

The backend runs on http://localhost:4000

### 2. Start the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on http://localhost:5173 (Vite default)

### 3. Open the app

Go to http://localhost:5173 in your browser.

## How It Works

- The backend stores todos in a `data.json` file (no database needed).
- The frontend uses React with Vite.
- There are 2 pages: the todo list and a single todo detail page.
- Navigation works using regular links (full page reloads, not SPA routing).
- The `?id=` query parameter decides which page to show.
