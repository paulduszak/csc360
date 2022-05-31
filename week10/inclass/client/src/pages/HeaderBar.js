import React, { useContext } from 'react'
import Header from '../Header'
import UserBar from '../UserBar'
import CreatePost from '../CreatePost'

import { ThemeContext } from '../App'
import StateContext from '../Context'

import {Link} from 'react-navi'

export default function HeaderBar () {

    const {state, dispatch} = useContext(StateContext)
    
return (
<>
    <ThemeContext.Provider value={{primary:'red'}}> 
        <Header text="My Blog" />
    </ThemeContext.Provider>
    <UserBar user={state.user} dispatch={dispatch} />
    {state.user && <Link href="/post/create">Create New Post</Link> }
    
</>
)
}