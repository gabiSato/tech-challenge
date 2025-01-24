import {
  ITransactionRepository,
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from "./transaction-repository.interface";
import prisma from "@/lib/prisma";

import { Transaction } from "@/types/Transaction";

export class TransactionRepository implements ITransactionRepository {
  async create(data: CreateTransactionDTO): Promise<Transaction> {
    return prisma.transaction.create({ data });
  }

  async getById(id: number): Promise<Transaction | null> {
    return prisma.transaction.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateTransactionDTO): Promise<Transaction> {
    return prisma.transaction.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.transaction.delete({ where: { id } });
  }
}
