import React, { useState, useReducer, useEffect } from "react";
import { useResource } from "react-request-hook";
import UserBar from "./UserBar";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

import appReducer from "./reducers";

function App() {
  //const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]

  // const [user, dispatchUser] = useReducer(userReducer, "")
  // const [posts, dispatchPosts] = useReducer(postReducer, [])

  const [state, dispatch] = useReducer(appReducer, { user: "", posts: [] });

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  useEffect(getPosts, []);

  useEffect(() => {
    if (posts && posts.data) {
      console.log(posts.data.reverse());
      dispatch({ type: "FETCH_POSTS", posts: posts.data });
    }
  }, [posts]);

  useEffect(() => {
    fetch("/api/posts")
      .then((result) => result.json())
      .then((posts) => dispatch({ type: "FETCH_POSTS", posts }));
  }, []);

  //const [posts, setPosts] = useState([])

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && (
        <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />
      )}
      <PostList posts={state.posts} dispatch={dispatch} />
    </div>
  );
}

export default App;
