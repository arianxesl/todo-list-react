import React, { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim() !== "") {
      onEdit(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <input 
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            margin: "0 10px",
          }}
        >
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        <button className="mark-btn" onClick={onToggle}>
          {todo.completed ? "Mark as pending" : "Mark as done"}
        </button>
        <button className="edit-btn" onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem;