export type TransactionType = "DEPOSIT" | "WITHDRAWAL";

export type Transaction = {
  id: number;
  description: string;
  amountInCents: number;
  transactionType: TransactionType;
  accountId: number;
  createdAt: Date;
  updatedAt: Date;
};
