"use client";
import React from "react";

const AddTransaction = () => {
  async function clientAction(formData: FormData) {
    console.log(formData.get("text"), formData.get("amount"));
  }

  return (
    <>
      <h2>Add transaction</h2>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name="text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <span>(negative → expense, positive → income)</span>
          </label>
          <input type="number" name="amount" step={0.01} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
