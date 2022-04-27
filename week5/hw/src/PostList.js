import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], setPosts }) {
  const updateTodo = (id, todo) => {
    const updatedPosts = [...posts]
    updatedPosts[id] = todo

    setPosts(updatedPosts)
  }
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <Post {...p} id={i} updateTodo={updateTodo} key={"post-" + i} />
      ))}
    </div>
  );
}
