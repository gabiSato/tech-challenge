"use client";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

import { deleteTransaction } from "@/actions";

import Text from "@/components/text";

import PencilIcon from "../../public/icons/pencil.svg";
import TrashIcon from "../../public/icons/trash.svg";
import { Transaction } from "@/types/Transaction";
import { toast } from "react-toastify";

export default function TransactionDetail({
  transaction,
}: {
  transaction: Transaction;
}) {
  const router = useRouter();

  const formattedCreatedAt = dayjs(transaction?.createdAt).format("DD/MM/YYYY");
  const amount = transaction?.amountInCents / 100;
  const formattedAmount = amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleDelete = () => {
    deleteTransaction(transaction.id)
      .then(() => router.replace("/"))
      .catch(() => toast.error("Não foi possível excluir a transação"));
  };

  const redirectToEditPage = () => {
    router.push(`/transaction/${transaction.id}/edit`);
  };

  return (
    <div className="max-w-[360px]">
      <div className="flex gap-32 mb-32 justify-between">
        <div className="flex flex-col gap-8 mb-32">
          <Text as="h1" size="lg" weight="semibold">
            Detalhe da transação {transaction?.id}
          </Text>
          <Text size="xs" color="neutral-400">
            Criada em {formattedCreatedAt}
          </Text>
        </div>

        <div className="flex gap-8">
          <button
            className="bg-cyan-300 w-32 h-32 flex items-center justify-center rounded-full"
            onClick={redirectToEditPage}
          >
            <PencilIcon className="text-white w-16 h-16" />
          </button>

          <button
            className="bg-cyan-300 w-32 h-32 flex items-center justify-center rounded-full"
            onClick={handleDelete}
          >
            <TrashIcon className="text-white w-16 h-16" />
          </button>
        </div>
      </div>

      <div className=" border border-neutral-400 rounded px-20 py-16 mb-24">
        <div className="flex justify-between gap-24">
          <Text size="xs">Tipo da transação</Text>

          <Text size="xs" weight="semibold" color="cyan-200">
            {transaction?.description}
          </Text>
        </div>

        <div className="w-full border-t border-t-neutral-300 my-8"></div>

        <div className="flex justify-between gap-24">
          <Text size="sm">Valor</Text>

          <Text size="sm" weight="semibold" color="cyan-200">
            {formattedAmount}
          </Text>
        </div>
      </div>
    </div>
  );
}
