"use client";
import Text from "@/components/text";

import TransactionList from "@/components/transaction-list";
import { Transaction } from "@/types/Transaction";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export default function TransactionHistory({
  transactions,
}: TransactionHistoryProps) {
  return (
    <div className="bg-neutral-100 rounded px-36 lg:px-24 pt-32 lg:pt-24 pb-[42px]">
      <div className="sm:w-[232px] sm:mx-auto">
        <Text
          className="mb-32 sm:text-black"
          as="h2"
          size="xl"
          color="cyan-100"
          weight="bold"
        >
          Extrato
        </Text>

        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}
