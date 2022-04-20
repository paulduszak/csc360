import React from "react";
import Post from "./Post";

export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <Post {...p} key={"post-" + i} />
      ))}
    </div>
  );
}
