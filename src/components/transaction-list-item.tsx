"use client";
import { Transaction } from "@/types/Transaction";
import Text from "@/components/text";
import dayjs from "dayjs";
import Link from "next/link";

interface TransactionListItemProps {
  transaction: Transaction;
}

export default function TransactionListItem({
  transaction,
}: TransactionListItemProps) {
  const formattedDate = dayjs(transaction?.createdAt).format("DD/MM");
  const amount = transaction?.amountInCents / 100;
  const formattedAmount = amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const isNegative = transaction?.transactionType === "WITHDRAWAL";

  return (
    <li className="group py-8 flex gap-18">
      <Link
        className="flex flex-col w-full pb-16 group-[&:not(:last-of-type)]:border-b group-[&:not(:last-of-type)]:border-b-cyan-300/80 hover:underline decoration-cyan-100"
        href={`/transaction/${transaction.id}`}
      >
        <Text size="sm" color="cyan-100">
          {transaction?.description}
        </Text>

        <Text size="sm" color="cyan-100" weight="semibold">
          {isNegative && "-"}
          {formattedAmount}
        </Text>
      </Link>

      <Text size="xs" color="neutral-400">
        {formattedDate}
      </Text>
    </li>
  );
}
