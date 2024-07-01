import React from "react";
import getUserBalance from "@/app/actions/getUserBalance";
import { addThousandNumberCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h3>Your balance</h3>
      <p className="balance-text">
        {addThousandNumberCommas(Number(balance?.toFixed(2)) ?? 0)}
      </p>
    </>
  );
};

export default Balance;
