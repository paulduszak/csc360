import React, {useState, useContext, useEffect} from "react";
import { useResource } from "react-request-hook";
import { useNavigation } from 'react-navi'


import StateContext from "./Context";


export default function CreatePost() {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  const navigation = useNavigation()

  const {state, dispatch} = useContext(StateContext)
  const {user} = state

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleContent (evt) { setContent(evt.target.value) }

  const [post , createPost ] = useResource(({ title, content, author }) => ({
    url: '/posts',
    method: 'post',
    data: { title, content, author }
}))

useEffect(() => {
  if(post && post.data && post.isLoading === false) {
    navigation.navigate(`/post/${post.data.id}`)
  }
}, [post])



  function handleCreate (evt) {  
    //const newPost = { title, content, author: user, dateCreated: Date.now(), dateCompleted: null, complete: false }
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
    //setPosts([newPost, ...posts])
    createPost({ title, content, author: user })
    dispatch({type:'CREATE_POST', title, content, author: user})
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
