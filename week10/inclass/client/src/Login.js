import React, { useState, useEffect, useContext } from "react";
import { useResource } from "react-request-hook";
import { ThemeContext } from "./App";

export default function Login({ dispatch }) {
  const [username, setUsername] = useState("");
  const theme = useContext(ThemeContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  const [user, login] = useResource((username, password) => ({
    url: "auth/login",
    method: "post",
    data: { username, password },
  }));

  useEffect(() => {
    if (user && user.data) {
      if (user.data.access_token) {
        setLoginFailed(false);
        dispatch({
          type: "LOGIN",
          username,
          access_token: user.data.access_token,
        });
      } else {
        setLoginFailed(true);
      }
    }
  }, [user]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <label style={{ color: theme.primary }} htmlFor="login-username">
          Username:
        </label>
        <input
          type="text"
          name="login-username"
          value={username}
          onChange={handleUsername}
          id="login-username"
        />
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          name="login-username"
          id="login-username"
        />
        <input type="submit" value="Login" disabled={username.length === 0} />
      </form>
      {loginFailed && (
        <span style={{ color: "red" }}>Invalid username or password</span>
      )}
    </>
  );
}
