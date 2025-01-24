"use client";
import { createContext, useEffect, useState } from "react";

import { User } from "@/types/User";
import { Account } from "@/types/Account";
import { Transaction } from "@/types/Transaction";
import { getAccountTransactions } from "@/actions";

interface UserAccountContext {
  pending: boolean;
  user: User | null;
  account: Account | null;
  transactions: Transaction[];
  updateTransactionList(): void;
}

export const UserAccountContext = createContext<UserAccountContext | undefined>(
  undefined
);

export const UserAccountProvider = ({
  userData,
  children,
}: {
  userData: User | null;
  children: React.ReactNode;
}) => {
  const [pending, setPending] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (userData) {
      setUser(userData);
      setAccount(userData.account);
      setTransactions(userData.account?.transactions || []);
      setPending(false);
    }
  }, [userData]);

  function updateTransactionList() {
    if (!account?.id) return;

    getAccountTransactions(account?.id).then((transactions) => {
      setTransactions(transactions);
    });
  }

  return (
    <UserAccountContext.Provider
      value={{ pending, user, account, transactions, updateTransactionList }}
    >
      {children}
    </UserAccountContext.Provider>
  );
};
