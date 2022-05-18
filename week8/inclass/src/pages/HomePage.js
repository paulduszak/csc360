import React, { useEffect, useContext } from 'react'
import StateContext from '../Context'
import { useResource } from 'react-request-hook'
import PostList from '../PostList'


export default function HomePage() {

  const {state, dispatch} = useContext(StateContext)
      
  const [ posts, getPosts ] = useResource(() => ({
    url: '/posts',
    method: 'get'
  }))

  useEffect(getPosts, [])

  useEffect(() => {
    if (posts && posts.data) {
        dispatch({ type: 'FETCH_POSTS', posts: posts.data })
    }
  }, [posts])

  return <PostList posts={state.posts} />
}