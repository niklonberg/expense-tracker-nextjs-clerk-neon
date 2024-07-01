"use client";
import React from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  async function clientAction(formData: FormData) {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      // temp, redirect later
      toast.success("Transaction added");
      console.log(data);
    }
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
