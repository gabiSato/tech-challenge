"use client";
import { useState } from "react";
import dayjs from "dayjs";

import WellcomeCard from "@/components/wellcome-card";
import Text from "@/components/text";

import { Account } from "@/types/Account";
import { User } from "@/types/User";

import EyeIcon from "../../public/icons/eye.svg";
import EyeClosedIcon from "../../public/icons/eye-closed.svg";

interface WellcomeProps {
  user: User;
  account: Account | null;
}

export default function Wellcome({ user, account }: WellcomeProps) {
  const [showBalance, setShowBalance] = useState(true);

  const firstName = user?.name?.split(" ")[0];
  const accountBalance = (account?.balanceInCents || 0) / 100;
  const accountBalanceFormatted = accountBalance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const currentDateFormatted = dayjs().format("dddd, DD/MM/YYYY");

  const toggleBalanceVisibility = () => {
    setShowBalance((prevValue) => !prevValue);
  };

  return (
    <WellcomeCard>
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between sm:w-9/12">
        <div className="flex flex-col gap-24 text-center sm:text-start mb-40 w-fit ">
          <Text as="h1" size="xl" color="white" weight="semibold">
            Olá, {firstName}! :)
          </Text>

          <Text className="capitalize" as="p" size="xs" color="white">
            {currentDateFormatted}
          </Text>
        </div>

        <div className="flex flex-col gap-16 w-[180px] sm:translate-y-2/4">
          <div className="flex gap-24 items-center pb-6 border-b-2 border-b-white lg:border-b-orange-100">
            <Text as="h2" size="lg" color="white" weight="semibold">
              Saldo
            </Text>

            <button onClick={toggleBalanceVisibility}>
              {showBalance ? (
                <EyeIcon className="text-white w-20 h-20 lg:text-orange-100" />
              ) : (
                <EyeClosedIcon className="text-white w-20 h-20 lg:text-orange-100" />
              )}
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <Text color="white">Conta corrente</Text>

            <Text size="2xl" color="white">
              {showBalance ? accountBalanceFormatted : "********"}
            </Text>
          </div>
        </div>
      </div>
    </WellcomeCard>
  );
}
