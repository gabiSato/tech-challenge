"use client";
import { formatDate } from "@/lib/formatters";
import { Transaction } from "@/types/Transaction";

import TransactionListItem from "@/components/transaction-list-item";
import Text from "@/components/text";

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  const groupedByMonthTransactions = Object.groupBy(
    transactions,
    ({ createdAt }) => formatDate("MMMM", createdAt)
  );

  return (
    <div className="flex flex-col gap-8">
      {Object.entries(groupedByMonthTransactions).map(
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
