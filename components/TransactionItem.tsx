import React from "react";
import { Transaction } from "@prisma/client";
import { addThousandNumberCommas } from "@/lib/utils";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount > 0 ? "positive" : "negative"}>
      {transaction.text}
      <span>
        {sign}${addThousandNumberCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};

export default TransactionItem;
