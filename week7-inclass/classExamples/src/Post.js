import React, {useState} from "react";

export default function Post({ 
  title, 
  content, 
  author,
  dateCreated,
  dateCompleted,
  completed,
  id,
  updatePost,
  deletePost
   }) {

    const [checked, updateChecked] = useState(false)

    const handleToggleEvent = (event) => {
      console.log('in handleToggle')
      updateChecked(event.target.checked)
      const updatedPost = {title, content, author, dateCreated, id, dateCompleted: Date.now(), completed: !completed}
      console.log('updatedPost:', updatedPost)
      updatePost(id, updatedPost)
    }
  
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <div>Date Created: {new Date(dateCreated).toDateString()}</div>
      <div>Date Completed: {completed ? new Date(dateCompleted).toDateString() : 'Not yet completed'}</div>
      <input type="checkbox" value={checked} onClick={handleToggleEvent} />
      <input type="button" value="Delete this post" onClick={() => deletePost(id)} />
    </div>
  );
}
