import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar() {
  const user = "Paul";
  if (user) {
    return <Logout user={user} />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
