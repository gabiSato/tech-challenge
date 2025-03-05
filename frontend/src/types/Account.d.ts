import { Transaction } from "./Transaction";

export type Account = {
  id: number;
  balanceInCents: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  transactions?: Transaction[];
};
