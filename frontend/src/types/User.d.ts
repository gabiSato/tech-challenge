import { Account } from "./Account";

export type User = {
  id: number;
  name: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  account: Account | null;
};
