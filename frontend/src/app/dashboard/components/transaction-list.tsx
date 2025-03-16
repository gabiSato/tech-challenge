"use client";
import { useEffect, useState } from "react";

import { useUserAccount } from "@/hooks/useUserAccount";
import { Transaction } from "@/types/Transaction";
import { formatDate } from "@/lib/formatters";

import TransactionListItem from "@/app/dashboard/components/transaction-list-item";
import Text from "@/components/text";

export default function TransactionList() {
  const { transactions } = useUserAccount();

  const [transactionsGroupedByMonth, setTransactionsGroupedByMonth] = useState<
    Partial<Record<string, Transaction[]>>
  >({});

  useEffect(() => {
    console.log("context", transactions);
    if (transactions.length) {
      const groupedTransactions = Object.groupBy(
        transactions,
        ({ createdAt }) => formatDate("MMMM", createdAt)
      );

      setTransactionsGroupedByMonth(groupedTransactions);
    }
  }, [transactions]);

  return (
    <div className="flex flex-col gap-8">
      {Object.entries(transactionsGroupedByMonth).map(
        ([month, transactions]) => (
          <div key={month}>
            <Text
              className="capitalize"
              as="h3"
              size="xs"
              color="cyan-300"
              weight="semibold"
            >
              {month}
            </Text>

            <ul>
              {transactions?.map((transaction) => (
                <TransactionListItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
