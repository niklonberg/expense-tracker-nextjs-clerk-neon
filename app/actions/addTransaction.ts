"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const text = formData.get("text")?.toString() ?? "";
  const amount = formData.get("amount")?.toString() ?? "";

  let errMsg = "";
  if (text === "") {
    errMsg += "Please add text describing the transaction. ";
  }
  if (amount === "") {
    errMsg += "Please add an amount for the transaction.";
  }
  if (errMsg) return { error: errMsg };

  // get logged in user
  const { userId } = auth();
  console.log(userId);

  // check for user
  if (!userId) return { error: "User not found" };

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: { text, amount: parseFloat(amount), userId },
    });

    revalidatePath("/");

    return { data: transactionData };
  } catch (error) {
    return {
      error:
        "Something went wrong saving transaction to database. Transaction not added",
    };
  }
}

export default addTransaction;
