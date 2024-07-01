import React from "react";
import getUserBalance from "@/app/actions/getUserBalance";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h3>Your balance</h3>
      <h1>{balance ?? 0}</h1>
    </>
  );
};

export default Balance;
