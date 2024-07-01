import React from "react";
import { Transaction } from "@prisma/client";
import { addThousandNumberCommas } from "@/lib/utils";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <li className={transaction.amount > 0 ? "positive" : "negative"}>
      {transaction.text}
      <span>{addThousandNumberCommas(transaction.amount)}</span>
    </li>
  );
};

export default TransactionItem;
