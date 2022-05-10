import React, { useState } from "react";

export default function Post({
  title,
  content,
  author,
  dateCreated,
  dateCompleted,
  completed,
  id,
  updatePost,
  deletePost,
}) {
  const [checked, updateChecked] = useState(false);

  const handleToggleEvent = (event) => {
    updateChecked(event.target.checked);

    updatePost(id, {
      title,
      content,
      author,
      dateCreated,
      id,
      dateCompleted: Date.now(),
      completed: !completed,
    });
  };
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <div>Date Created: {new Date(dateCreated).toDateString()}</div>
      <div>
        Date Completed:
        {completed ? new Date(dateCompleted).toDateString() : "Not Completed"}
      </div>
      <i>
        Written by <b>{author}</b>
      </i>
      <div>
        Completed:{" "}
        <input type="checkbox" value={checked} onClick={handleToggleEvent} />
      </div>

      <input type="button" value="Delete Post" onClick={() => deletePost(id)} />
    </div>
  );
}
