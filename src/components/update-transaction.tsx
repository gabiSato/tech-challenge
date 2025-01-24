"use client";
import { toast } from "react-toastify";

import { updateTransaction } from "@/actions";
import { Transaction } from "@/types/Transaction";

import Text from "@/components/text";
import TransactionForm, {
  TransactionData,
} from "@/components/transaction-form";

export default function UpdateTransaction({
  transaction,
}: {
  transaction: Transaction;
}) {
  const handleSubmit = (data: TransactionData) => {
    return updateTransaction(transaction.id, data)
      .then(() => {
        toast.success("Transação atualizada com sucesso!");
      })
      .catch(() => {
        toast.error("Não foi possível editar a transação.");
      });
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
