import React from "react";
import TodoList from "./TodoList.jsx";
import TodoPage from "./TodoPage.jsx";

function App() {
  const params = new URLSearchParams(window.location.search);
  const todoId = params.get("id");


  if (todoId) {
    return <TodoPage id={todoId} />;
  }
  return <TodoList />;
}

export default App;
