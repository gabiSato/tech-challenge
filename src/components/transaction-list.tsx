"use client";
import Text from "@/components/text";

import TransactionListItem from "@/components/transaction-list-item";
import { Transaction } from "@/types/Transaction";
import dayjs from "dayjs";

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  const groupedByMonthTransactions = Object.groupBy(
    transactions,
    ({ createdAt }) => dayjs(createdAt).format("MMMM")
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
