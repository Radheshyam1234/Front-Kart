import { createContext, useContext, useReducer, useState } from "react";
import { stateReducer } from "./state-reducer";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    wishlistItems: [],
    orders: [],
  };

  const [userState, userDispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={{ userState, userDispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
