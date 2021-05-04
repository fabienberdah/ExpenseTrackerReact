import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const renderTransactions = transactions.map(({ id, text, amount }) => {
    return <Transaction key={id} text={text} amount={amount} id={id} />;
  });

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {renderTransactions}
      </ul>
    </div>
  );
};

export default TransactionList;
