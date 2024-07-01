import React from "react";
import { Transaction } from "@prisma/client";

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <p>{transaction.text}</p>
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
