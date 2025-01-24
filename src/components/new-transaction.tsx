"use client";
import { toast } from "react-toastify";

import { useUserAccount } from "@/hooks/useUserAccount";
import { createTransaction } from "@/actions";

import TransactionCard from "@/components/transaction-card";
import TransactionForm, {
  TransactionData,
} from "@/components/transaction-form";
import Text from "@/components/text";

export default function NewTransaction({ accountId }: { accountId: number }) {
  const { updateTransactionList } = useUserAccount();

  const handleSubmit = (data: TransactionData) => {
    return createTransaction({ ...data, accountId: accountId })
      .then(() => {
        updateTransactionList();
        toast.success("Transação criada com sucesso!");
      })
      .catch(() => {
        toast.error("Não foi possível cadastrar a transação.");
      });
  };

  return (
    <TransactionCard>
      <Text className="mb-32" as="h2" size="xl" color="cyan-100" weight="bold">
        Nova transação
      </Text>

      <TransactionForm onSubmit={handleSubmit} shouldReset />
    </TransactionCard>
  );
}
