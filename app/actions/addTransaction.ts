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
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");
  let errMsg = "";
  // form check
  if (!textValue || textValue.toString().trim() === "") {
    errMsg = "Please add text describing the transaction. ";
  }
  if (!amountValue) errMsg += "Please add an amount for the transaction.";
  if (errMsg) return { error: errMsg };

  const text: string = textValue.toString(); // Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); // Parse amount as number

  const transactionData: TransactionData = {
    text,
    amount,
  };

  return { data: transactionData };
}
