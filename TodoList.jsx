import React, { useState, useEffect } from "react";

const API = "http://localhost:4000/api/todos";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");


  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);


  function addTodo() {
    if (!newTitle.trim()) return;
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((res) => res.json())
      .then((todo) => {
        setTodos([...todos, todo]);
        setNewTitle("");
      });
  }


  function deleteTodo(id) {
    fetch(API + "/" + id, { method: "DELETE" }).then(() => {
      setTodos(todos.filter((t) => t.id !== id));
    });
  }


  function toggleTodo(id) {
    const todo = todos.find((t) => t.id === id);
    fetch(API + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setTodos(todos.map((t) => (t.id === id ? updated : t)));
      });
  }


  function startEdit(todo) {
    setEditId(todo.id);
    setEditTitle(todo.title);
  }


  function saveEdit(id) {
    fetch(API + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setTodos(todos.map((t) => (t.id === id ? updated : t)));
        setEditId(null);
        setEditTitle("");
      });
  }

  return (
    <div>
      <h1>My Todos</h1>

      {/* add todo form */}
      <div>
        <input
          type="text"
          placeholder="Enter a new todo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* todo list */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button onClick={() => saveEdit(todo.id)}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <a
                    href={"/?id=" + todo.id}
                    className={todo.completed ? "completed" : ""}
                  >
                    {todo.title}
                  </a>
                </>
              )}
            </div>
            <div>
              {editId !== todo.id && (
                <>
                  <button onClick={() => startEdit(todo)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>No todos yet. Add one above!</p>}
    </div>
  );
}

export default TodoList;
