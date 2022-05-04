import React, {useState, useEffect, useContext} from "react";
import { ThemeContext } from "./App";

export default function Login({dispatch}) {
  const [ username, setUsername ] = useState("")
  const theme = useContext(ThemeContext)

  function handleUsername (evt) { setUsername(evt.target.value) }

  return (
    <form onSubmit={(e) => {e.preventDefault(); dispatch({type: 'LOGIN', username})}}>
      <label style={ { color: theme.primary} }htmlFor="login-username">Username:</label>
      <input type="text" name="login-username" value={username} onChange={handleUsername}
 id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}
