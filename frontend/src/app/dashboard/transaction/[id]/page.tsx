import { getTransaction } from "@/actions";

import TransactionDetail from "@/app/dashboard/components/transaction-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const transaction = await getTransaction(Number(id));

  return (
    <div className="w-full bg-neutral-100 rounded p-32">
      <TransactionDetail transaction={transaction} />
    </div>
  );
}
