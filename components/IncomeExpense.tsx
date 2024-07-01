import React from "react";
import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addThousandNumberCommas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expenses } = await getIncomeExpense();

  // Ensure income and expenses are always numbers
  const formattedIncome = parseFloat(income?.toFixed(2) ?? "0");
  const formattedExpenses = parseFloat(expenses?.toFixed(2) ?? "0");

  return (
    <div className="income-expense-container">
      <section>
        <h4>Income</h4>
        <p className="money positive">
          ${addThousandNumberCommas(formattedIncome)}
        </p>
      </section>
      <section>
        <h4>Expenses</h4>
        <p className="money negative">
          ${addThousandNumberCommas(formattedExpenses)}
        </p>
      </section>
    </div>
  );
};

export default IncomeExpense;
