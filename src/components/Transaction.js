import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount >= 0 ? "+" : "-";
  const transactionClass = amount >= 0 ? "plus" : "minus";

  return (
    <li className={transactionClass}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
