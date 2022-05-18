import React from "react";

const StateContext = React.createContext(
    { 
      state: {},
      dispatch: () => {}
    }
)

export default StateContext;
