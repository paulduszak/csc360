import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import PostList from "./PostList";
import CreatePost from "./CreatePost";

import appReducer from "./reducers";

function App() {

  

  //const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]

  // const [user, dispatchUser] = useReducer(userReducer, "")
  // const [posts, dispatchPosts] = useReducer(postReducer, [])

  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [] })

  //const [posts, setPosts] = useState([])



  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />}
      <PostList posts={state.posts} />
    </div>
  );
}

export default App;
