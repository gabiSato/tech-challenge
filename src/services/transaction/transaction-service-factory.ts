import { TransactionRepository } from "@/repositories/transaction/transaction-repository";
import { TransactionService } from "@/services/transaction/transaction-service";

export function makeTransactionService() {
  const repository = new TransactionRepository();
  const service = new TransactionService(repository);

  return service;
}
