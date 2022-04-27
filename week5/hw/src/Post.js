import React from "react";

export default function Post({ title, content, author, complete, created, id, updateTodo }) {
  
  function handleUpdate(event) {
    const newTodo = {
      title,
      content,
      author,
      complete: event.target.checked,
      created,
      updated: Date.now(),
    }
    updateTodo(id, newTodo)
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <input type="checkbox" value={complete} onChange={handleUpdate} />
    </div>
  );
}
