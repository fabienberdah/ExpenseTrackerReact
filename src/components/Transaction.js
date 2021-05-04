import React from "react";

const Transaction = ({ text, amount }) => {
  const sign = amount >= 0 ? "+" : "-";
  const transactionClass = amount >= 0 ? "plus" : "minus";

  return (
    <li className={transactionClass}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
