import React, {useState, useEffect} from "react";
import { useResource } from "react-request-hook";

export default function Register({dispatch}) {

  const [ formData, setFormData ] = useState({
    username: "",
    password: "", 
    passwordRepeat: ""
})

const [ user, register ] = useResource((username, password) => ({
  url: '/users',
  method: 'post',
  data: { username, password }
}))

useEffect(() => {
  if (user && user.data) {
      dispatch({ type: 'REGISTER', username: user.data.username })
  }
}, [user])



  return (
    <form onSubmit={(e) => {e.preventDefault(); register(formData.username, formData.password) }}>
      <label htmlFor="register-username">Username:</label>
      <input type="text" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}  name="register-username" id="register-username" />
      <label htmlFor="register-password">Password:</label>
      <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} name="register-password" id="register-password" />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat: e.target.value})}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input type="submit" value="Register" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat}  />
    </form>
  );
}
