import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//Create context... This will hold our global State for our transactions. If we were dealing with a larger application that needs to keep track of various states for various components, we would create various contexts and import them into this one which is global.
export const GlobalContext = createContext(initialState);

//We now need to create a Provider for this GlobalContext in order for other components to have access to our state. Then, we will need to wrap all the components that need access to the state with the Provider.

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
