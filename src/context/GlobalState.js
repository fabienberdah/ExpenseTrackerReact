import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};

//Create context... This will hold our global State for our transactions. If we were dealing with a larger application that needs to keep track of various states for various components, we would create various contexts and import them into this one which is global.
export const GlobalContext = createContext(initialState);

//We now need to create a Provider for this GlobalContext in order for other components to have access to our state. Then, we will need to wrap all the components that need access to the state with the Provider.

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //delete a transaction
  function deleteTransaction(id) {
    // the function will dispatch an action object to the reducer specified abobe in (const [state, dispatch] = useReducer(AppReducer, initialState);)
    dispatch({
      //Convention wants it that the type be written in capital letters with words separated by an underscore
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // add a transaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
