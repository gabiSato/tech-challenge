"use client";
import { Transaction } from "@/types/Transaction";
import Text from "@/components/text";
import Link from "next/link";

import { formatDate, formatToCurrency } from "@/lib/formatters";

interface TransactionListItemProps {
  transaction: Transaction;
}

export default function TransactionListItem({
  transaction,
}: TransactionListItemProps) {
  const formattedDate = formatDate("DD/MM", transaction?.createdAt);
  const amount = transaction?.amountInCents / 100;
  const isNegative = transaction?.transactionType === "WITHDRAWAL";

  return (
    <li className="group py-8 flex gap-18">
      <Link
        className="flex flex-col w-full pb-16 group-not-last-of-type:border-b group-not-last-of-type:border-b-cyan-300/80 hover:underline decoration-cyan-100"
        href={`/transaction/${transaction.id}`}
      >
        <Text size="sm" color="cyan-100">
          {transaction?.description}
        </Text>

        <Text size="sm" color="cyan-100" weight="semibold">
          {isNegative && "-"}
          {formatToCurrency(amount)}
        </Text>
      </Link>

      <Text size="xs" color="neutral-400">
        {formattedDate}
      </Text>
    </li>
  );
}
