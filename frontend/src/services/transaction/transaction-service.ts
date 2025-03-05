import {
  ITransactionRepository,
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from "@/repositories/transaction/transaction-repository.interface";
import type { Transaction } from "@/types/Transaction";

export class TransactionService {
  constructor(private repository: ITransactionRepository) {}

  async create(data: CreateTransactionDTO): Promise<Transaction> {
    return this.repository.create(data);
  }

  async getById(id: number): Promise<Transaction | null> {
    return this.repository.getById(id);
  }

  async update(id: number, data: UpdateTransactionDTO): Promise<Transaction> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.repository.delete(id);
  }
}
