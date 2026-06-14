const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
app.use(express.json());


function readTodos() {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}


function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}


app.get("/api/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});


app.get("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});


app.post("/api/todos", (req, res) => {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    title: req.body.title || "Untitled",
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});


app.put("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos[index] = { ...todos[index], ...req.body };
  writeTodos(todos);
  res.json(todos[index]);
});


app.delete("/api/todos/:id", (req, res) => {
  let todos = readTodos();
  const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos.splice(index, 1);
  writeTodos(todos);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
