"use client";
import {
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "@/actions";
import { toast } from "react-toastify";
import { useUserAccount } from "./useUserAccount";
import { Transaction, TransactionFormData } from "@/types/Transaction";

export function useTransaction() {
  const { account, transactions, setTransactions } = useUserAccount();

  async function create(transactionData: TransactionFormData) {
    return createTransaction({ ...transactionData, accountId: account!.id })
      .then((newTransaction: Transaction) => {
        addItemToTransactionList(newTransaction);
        toast.success("Transação criada com sucesso!");
      })
      .catch(() => {
        toast.error("Não foi possível cadastrar a transação.");
      });
  }

  async function update(
    transactionId: number,
    transactionData: TransactionFormData
  ) {
    return updateTransaction(transactionId, transactionData)
      .then((updatedTransaction) => {
        updateItemInTransactionList(updatedTransaction);
        toast.success("Transação atualizada com sucesso!");
      })
      .catch(() => {
        toast.error("Não foi possível editar a transação.");
      });
  }

  async function remove(transactionId: number) {
    return deleteTransaction(transactionId)
      .then(() => {
        removeItemFromTransactionList(transactionId);
        toast.success("Transação excluída com sucesso!");
      })
      .catch(() => toast.error("Não foi possível excluir a transação"));
  }

  function addItemToTransactionList(newTransaction: Transaction) {
    setTransactions([newTransaction, ...transactions]);
  }

  function updateItemInTransactionList(updatedTransaction: Transaction) {
    const newTransactionList = transactions.map((transaction) => {
      if (transaction.id === updatedTransaction.id) {
        return updatedTransaction;
      }
      return transaction;
    });

    setTransactions(newTransactionList);
  }

  function removeItemFromTransactionList(transactionId: number) {
    const newTransactionList = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    setTransactions(newTransactionList);
  }

  return {
    createTransaction: create,
    updateTransaction: update,
    deleteTransaction: remove,
  };
}
