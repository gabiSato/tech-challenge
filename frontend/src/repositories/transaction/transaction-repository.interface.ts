import { Transaction } from "@/types/Transaction";

export interface ITransactionRepository {
  create(data: CreateTransactionDTO): Promise<Transaction>;
  getById(id: number): Promise<Transaction | null>;
  update(id: number, data: UpdateTransactionDTO): Promise<Transaction>;
  delete(id: number): Promise<void>;
}

export interface CreateTransactionDTO {
  amountInCents: number;
  transactionType: "DEPOSIT" | "WITHDRAWAL";
  accountId: number;
  description: string;
}

export interface UpdateTransactionDTO {
  amountInCents?: number;
  transactionType?: "DEPOSIT" | "WITHDRAWAL";
  description: string;
}
