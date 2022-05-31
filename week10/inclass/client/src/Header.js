import React, {useContext} from 'react'
import { ThemeContext } from './App'

const Header = ({text}) => {
    const theme = useContext(ThemeContext)
    return <h1 style={ { color: theme.primary} }>{text}</h1>
}

export default Header
