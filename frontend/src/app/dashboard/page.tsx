"use client";
import Loader from "@/components/loader";

import NewTransaction from "@/app/dashboard/components/new-transaction";
import TransactionHistory from "@/app/dashboard/components/transaction-history";
import Wellcome from "@/app/dashboard/components/wellcome";

import { useUserAccount } from "@/hooks/useUserAccount";

export default function Page() {
  const { pending, user, account } = useUserAccount();

  return pending ? (
    <Loader className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16px)]" />
  ) : (
    <>
      <div className="flex flex-col gap-24 sm:gap-32 lg:34 w-full">
        <section>
          <Wellcome user={user!} account={account} />
        </section>

        <section>
          <NewTransaction />
        </section>
      </div>

      <section>
        <TransactionHistory />
      </section>
    </>
  );
}
