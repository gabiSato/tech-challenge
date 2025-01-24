import { makeTransactionService } from "@/services/transaction/transaction-service-factory";

export function useTransaction() {
  const service = makeTransactionService();
  async function getTransaction(id) {
    try {
      const transaction = await service.getById(id);
    } catch (error) {
      throw error;
    }
  }
  return {
    getTransaction,
  };
}
