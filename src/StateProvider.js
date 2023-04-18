// setup data layer//
//we need this to trackl to the baskeet //

import React, { useState } from "react";
import { StateContext } from "./createContext";
import Item from "./components/Item";

//this is data layer

//build  a provider
export const StateProvider = ({ children }) => {
  const [name, setName] = useState("Manish");
  return <StateContext.Provider value={name}>{children}</StateContext.Provider>;
};
export default StateProvider;
//this is how we use it inside if a components
