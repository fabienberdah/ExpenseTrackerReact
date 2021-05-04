import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const renderTransactions = transactions.map((transaction) => {
    return (
      <Transaction
        key={transaction.id}
        text={transaction.text}
        amount={transaction.amount}
      />
    );
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
