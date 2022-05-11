import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default function UserBar({user, dispatch}) {
  
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}
