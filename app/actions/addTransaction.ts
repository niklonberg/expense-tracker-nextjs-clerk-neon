"use server";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text")?.toString() ?? "";
  const amountValue = formData.get("amount")?.toString() ?? "";

  let errMsg = "";
  if (textValue === "") {
    errMsg += "Please add text describing the transaction. ";
  }
  if (amountValue === "") {
    errMsg += "Please add an amount for the transaction.";
  }
  if (errMsg) return { error: errMsg };

  const transactionData: TransactionData = {
    text: textValue,
    amount: parseFloat(amountValue),
  };

  return { data: transactionData };
}

export default addTransaction;
