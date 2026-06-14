import React, { useState, useEffect } from "react";

const API = "http://localhost:4000/api/todos";

function TodoPage({ id }) {
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API + "/" + id)
      .then((res) => {
        if (!res.ok) throw new Error("Todo not found");
        return res.json();
      })
      .then((data) => setTodo(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
        <a href="/">← Back to list</a>
      </div>
    );
  }

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <div className="todo-detail">
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>Status:</strong> {todo.completed ? "Completed ✅" : "Not completed ❌"}</p>
        <p><strong>Created:</strong> {new Date(todo.createdAt).toLocaleString()}</p>
      </div>
      <br />
      <a href="/">← Back to list</a>
    </div>
  );
}

export default TodoPage;
