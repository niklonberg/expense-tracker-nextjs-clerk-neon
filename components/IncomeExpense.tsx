import React from "react";
import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addThousandNumberCommas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expenses } = await getIncomeExpense();

  return (
    <div className="income-expense-container">
      <section>
        <h4>Income</h4>
        <p className="money positive">
          ${addThousandNumberCommas(Number(income?.toFixed(2)) ?? 0)}
        </p>
      </section>
      <section>
        <h4>Expenses</h4>
        <p className="money negative">
          ${addThousandNumberCommas(Number(expenses?.toFixed(2)) ?? 0)}
        </p>
      </section>
    </div>
  );
};

export default IncomeExpense;
