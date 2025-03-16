"use client";
import { useTransaction } from "@/hooks/useTransaction";

import TransactionCard from "@/app/dashboard/components/transaction-card";
import TransactionForm from "@/app/dashboard/components/transaction-form";
import Text from "@/components/text";

export default function NewTransaction() {
  const { createTransaction } = useTransaction();

  return (
    <TransactionCard>
      <Text className="mb-32" as="h2" size="xl" color="cyan-100" weight="bold">
        Nova transação
      </Text>

      <TransactionForm onSubmit={createTransaction} shouldReset />
    </TransactionCard>
  );
}
