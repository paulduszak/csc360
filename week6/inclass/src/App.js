import React, { useState, useReducer, useEffect, createContext } from "react";
import UserBar from './UserBar'
import Header from './Header'
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

  useEffect(() => {
    console.log('user effect hook firing')
    if (state.user) {
       document.title = `${state.user}’s Blog` 
     } else {
       document.title = 'My Blog'
     }
   }, [state.user]
  )

  useEffect(() => {
    console.log('post effect hook firing')
   }, [state.posts]
  )
  //const [posts, setPosts] = useState([])



  return (
    <div>
      <ThemeContext.Provider value={{primary:'yellow'}}>
        <Header text="My Blog" />
      </ThemeContext.Provider>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreatePost user={state.user} posts={state.posts} dispatch={dispatch} />}
      <PostList posts={state.posts} />
    </div>
  );
}

export const ThemeContext = createContext({primary:'red'})

export default App;
