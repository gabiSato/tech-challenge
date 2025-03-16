import { getTransaction } from "@/actions";

import UpdateTransaction from "@/app/dashboard/components/update-transaction";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const transaction = await getTransaction(Number(id));

  return (
    <div className="w-full bg-neutral-300 rounded p-32">
      <UpdateTransaction transaction={transaction} />
    </div>
  );
}
