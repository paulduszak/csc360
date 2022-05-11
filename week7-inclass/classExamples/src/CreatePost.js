import React, {useState} from "react";

export default function CreatePost({ user, dispatch, posts }) {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleContent (evt) { setContent(evt.target.value) }
  function handleCreate (evt) {  
    //const newPost = { title, content, author: user, dateCreated: Date.now(), dateCompleted: null, complete: false }
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
    //setPosts([newPost, ...posts])
    dispatch({type:'CREATE_POST', title, content, author: user, dateCreated: Date.now(), dateCompleted: undefined, completed: false, id: Math.floor(Math.random() * 1000000)})
  }

  return (
    <>
    <h2>Create a New Post</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
    </>

  );
}
