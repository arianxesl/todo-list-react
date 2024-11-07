import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("") 

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, newTask]);
    setNewTodo("");
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Type a new task and press Enter"
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={editTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoApp;