import { Transaction, TransactionFormData } from "@/types/Transaction";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { object, string, number } from "yup";

import { useValidation } from "./useValidation";

export function useTransactionForm(transaction?: Transaction) {
  const transactionSchema = object({
    transactionType: string()
      .oneOf(
        ["Câmbio de Moeda", "DOC/TED", "Empréstimo e Financiamento"],
        "Valor inválido."
      )
      .required("Campo obrigatório."),
    amount: number()
      .moreThan(0, "Deve ser maior que 0")
      .required("Campo obrigatório"),
  });

  const { errors, validate, resetFieldErros, resetErrors } =
    useValidation(transactionSchema);

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
    resetFieldErros("transactionType");
  };

  const handleAmountChange = (
    _event: ChangeEvent<HTMLInputElement>,
    value: number | string
  ) => {
    setAmount(value as number);
    resetFieldErros("amount");
  };

  const reset = () => {
    setTransactionType(undefined);
    setAmount(0);
    resetErrors();
  };

  const validateFields = async () => {
    return await validate({
      transactionType,
      amount,
    });
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
    } as TransactionFormData;
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
    errors,
    handleTransactionTypeChange,
    handleAmountChange,
    reset,
    validateFields,
    generateDataForSubmission,
  };
}
