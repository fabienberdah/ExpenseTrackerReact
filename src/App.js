import React from "react";
import Header from "./components/Header";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import Balance from "./components/Balance";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
