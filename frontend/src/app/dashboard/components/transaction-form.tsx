"use client";
import { FormEvent, useState } from "react";
import { CurrencyInput } from "react-currency-mask";

import { Transaction, TransactionFormData } from "@/types/Transaction";
import { useTransactionForm } from "@/hooks/useTransactionForm";

import Select from "@/components/select";
import Input from "@/components/input";
import Button from "@/components/button";
import Text from "@/components/text";
import { error } from "console";

interface TransactionFormProps {
  transaction?: Transaction;
  onSubmit: (data: TransactionFormData) => Promise<void>;
  shouldReset?: boolean;
}

export default function TransactionForm({
  transaction,
  onSubmit,
  shouldReset,
}: TransactionFormProps) {
  const {
    transactionType,
    transactionOptions,
    amount,
    errors,
    handleAmountChange,
    handleTransactionTypeChange,
    generateDataForSubmission,
    reset,
    validateFields,
  } = useTransactionForm(transaction);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const valid = await validateFields();

    if (valid) {
      const data = generateDataForSubmission();

      setIsSubmitting(true);
      onSubmit(data!)
        .then(() => shouldReset && reset())
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <form
      className="flex flex-col gap-32 items-center sm:items-start"
      onSubmit={submit}
    >
      <Select
        className="sm:w-[355px]"
        placeholder="Selecione o tipo de transação"
        value={transactionType}
        options={transactionOptions}
        invalid={!!errors.transactionType?.length}
        error={errors.transactionType?.[0]}
        onChange={handleTransactionTypeChange}
      />

      <div className="flex flex-col gap-16 text-center sm:text-left">
        <Text as="label" size="sm" color="cyan-100" weight="semibold">
          Valor
        </Text>

        <CurrencyInput
          value={amount}
          onChangeValue={handleAmountChange}
          InputElement={
            <Input
              className="text-center"
              placeholder="00,00"
              invalid={!!errors.amount?.length}
              error={errors.amount?.[0]}
            />
          }
          hideSymbol
        />
      </div>

      <Button
        className="sm:w-[250px]"
        type="submit"
        loading={isSubmitting}
        onClick={submit}
      >
        {transaction ? "Atualizar transação" : "Concluir transação"}
      </Button>
    </form>
  );
}
