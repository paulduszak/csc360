import React, { useState, useReducer, useEffect, createContext } from "react";
import { useResource } from 'react-request-hook'

import UserBar from './UserBar'
import Header from './Header'
import PostList from "./PostList";
import CreatePost from "./CreatePost";

import StateContext from "./Context";

import appReducer from "./reducers";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import PostPage from "./pages/PostPage";

function App() {

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/post/create':route({ view: <CreatePost /> }),
    '/post/:id': route(req => {
        return { view: <PostPage id={req.params.id} /> }
    }),
})


  

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
    <Router routes={routes}>
      <StateContext.Provider value={{ state, dispatch }}>
        <HeaderBar />
        <View />
      </StateContext.Provider>
    </Router>
  );
}

export const ThemeContext = createContext({primary:'red'})

export default App;
