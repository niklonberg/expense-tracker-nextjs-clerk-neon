import React from "react";

const IncomeExpense = () => {
  return (
    <div className="income-expense-container">
      <section>
        <h4>Income</h4>
        <p className="money positive">$600</p>
      </section>
      <section>
        <h4>Expenses</h4>
        <p className="money negative">$200</p>
      </section>
    </div>
  );
};

export default IncomeExpense;
