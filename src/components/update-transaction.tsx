"use client";
import { Transaction, TransactionFormData } from "@/types/Transaction";
import { useTransaction } from "@/hooks/useTransaction";

import TransactionForm from "@/components/transaction-form";
import Text from "@/components/text";

export default function UpdateTransaction({
  transaction,
}: {
  transaction: Transaction;
}) {
  const { updateTransaction } = useTransaction();

  const handleSubmit = (data: TransactionFormData) => {
    return updateTransaction(transaction.id, data);
  };

  return (
    <>
      <Text className="mb-32" as="h1" size="xl" color="cyan-100" weight="bold">
        Editar transação {transaction.id}
      </Text>

      <TransactionForm transaction={transaction} onSubmit={handleSubmit} />
    </>
  );
}
