import { Transaction } from "@/types/Transaction";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useTransactionForm(transaction?: Transaction) {
  const [transactionType, setTransactionType] = useState<string | undefined>(
    undefined
  );
  const [amount, setAmount] = useState<number>(0);

  const transactionOptions = [
    { label: "Câmbio de Moeda", value: "Câmbio de Moeda" },
    { label: "DOC/TED", value: "DOC/TED" },
    {
      label: "Empréstimo e Financiamento",
      value: "Empréstimo e Financiamento",
    },
  ];
  const depositTypes = ["Empréstimo e Financiamento"];

  const handleTransactionTypeChange = (value: string) => {
    setTransactionType(value);
  };

  const handleAmountChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: number | string
  ) => {
    setAmount(value as number);
  };

  const reset = () => {
    setTransactionType(undefined);
    setAmount(0);
  };

  const generateDataForSubmission = () => {
    if (!transactionType || !amount) {
      toast.error("Todos os campos devem ser preenchidos");
      return;
    }

    return {
      transactionType: depositTypes.includes(transactionType)
        ? "DEPOSIT"
        : "WITHDRAWAL",
      description: transactionType,
      amountInCents: amount * 100,
    };
  };

  useEffect(() => {
    if (transaction) {
      setTransactionType(transaction.description);
      setAmount(transaction.amountInCents / 100);
    }
  }, [transaction]);

  return {
    transactionType,
    amount,
    transactionOptions,
    handleTransactionTypeChange,
    handleAmountChange,
    reset,
    generateDataForSubmission,
  };
}
