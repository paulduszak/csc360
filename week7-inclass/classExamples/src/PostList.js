import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], dispatch }) {
  const updatePost = (id, updatedPost) => {

    const updatedPosts = posts.map((post) => post.id === id ? updatedPost : post)
    console.log('updated posts:', updatedPosts)
    dispatch({ type: 'TOGGLE_POST', updatedPosts})
  }

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    dispatch( {type: 'DELETE_POST', updatedPosts})
  }


  return (
    <div>
      {posts.map((p, i) => (
        <Post {...p} key={p.id} updatePost={updatePost} deletePost={deletePost}/>
      ))}
    </div>
  );
}
