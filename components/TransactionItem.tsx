"use client";

import React from "react";
import { Transaction } from "@prisma/client";
import { addThousandNumberCommas } from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";

  async function handleDeleteTransaction(transactionId: string) {
    const confirm = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirm) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
    }
  }

  return (
    <li className={transaction.amount > 0 ? "positive" : "negative"}>
      {transaction.text}
      <span>
        {sign}${addThousandNumberCommas(Math.abs(transaction.amount))}
      </span>
      <button
        className="delete-btn"
        onClick={() => handleDeleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
