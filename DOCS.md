# Feature Documentation

This document describes every feature of the Todo App.

## Pages

### 1. Todo List Page (`/`)

This is the main page. It shows all your todos in a list.

**Features:**

- **View all todos** — All todos are listed with their title and a checkbox.
- **Add a todo** — Type a title in the text box and click "Add" (or press Enter). A new todo is created and added to the list.
- **Edit a todo** — Click the "Edit" button next to a todo. The title becomes editable. Change it and click "Save", or click "Cancel" to discard changes.
- **Delete a todo** — Click the "Delete" button next to a todo. It is removed from the list permanently.
- **Mark complete/incomplete** — Click the checkbox next to a todo to toggle it between completed and not completed. Completed todos show a strikethrough on their title.
- **View todo details** — Click on a todo's title text to go to its detail page.

### 2. Single Todo Page (`/?id=<todoId>`)

This page shows the details of a single todo. The todo ID is read from the `?id=` query parameter in the URL.

**Features:**

- **View todo details** — Shows the todo's ID, title, completion status (with emoji), and creation date/time.
- **Error handling** — If the todo ID doesn't exist, an error message is shown.
- **Back navigation** — A "← Back to list" link takes you back to the todo list page.

## Backend API

The backend runs on `http://localhost:4000` and provides these API endpoints:

### `GET /api/todos`

Returns all todos as a JSON array.

**Response example:**
```json
[
  {
    "id": 1718000000000,
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2025-06-10T10:00:00.000Z"
  }
]
```

### `GET /api/todos/:id`

Returns a single todo by its ID.

**Response example:**
```json
{
  "id": 1718000000000,
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2025-06-10T10:00:00.000Z"
}
```

**Error (404):**
```json
{ "error": "Todo not found" }
```

### `POST /api/todos`

Creates a new todo. Send a JSON body with a `title` field.

**Request body:**
```json
{ "title": "My new todo" }
```

**Response:** The created todo object (with `id`, `completed: false`, and `createdAt` filled in).

### `PUT /api/todos/:id`

Updates an existing todo. Send a JSON body with the fields you want to change (`title` and/or `completed`).

**Request body examples:**
```json
{ "title": "Updated title" }
```
```json
{ "completed": true }
```

**Response:** The updated todo object.

**Error (404):**
```json
{ "error": "Todo not found" }
```

### `DELETE /api/todos/:id`

Deletes a todo by its ID.

**Response:**
```json
{ "message": "Deleted" }
```

**Error (404):**
```json
{ "error": "Todo not found" }
```

## Data Storage

- Todos are stored in `backend/data.json`.
- It is a simple JSON file with an array of todo objects.
- The file starts as an empty array `[]`.
- Every create, update, or delete operation reads the file, changes the data, and writes it back.
- No database is used.

## Todo Object Shape

Each todo has these fields:

| Field       | Type    | Description                          |
|-------------|---------|--------------------------------------|
| `id`        | number  | Unique ID (generated from timestamp) |
| `title`     | string  | The todo text                        |
| `completed` | boolean | Whether the todo is done             |
| `createdAt` | string  | ISO date string of when it was made  |

## Navigation

- The app uses **query parameters** for navigation, not a routing library.
- Going to `/` shows the todo list page.
- Going to `/?id=12345` shows the detail page for todo with that ID.
- Clicking a todo title creates a regular `<a>` link which causes a full page reload (multi-page behavior, not SPA).
- The "Back to list" link on the detail page also causes a full page reload.
