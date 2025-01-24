"use server";
import { notFound } from "next/navigation";

import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from "./repositories/transaction/transaction-repository.interface";

import { makeUserService } from "./services/user/user-service-factory";
import { makeTransactionService } from "@/services/transaction/transaction-service-factory";

const userService = makeUserService();
const transactionService = makeTransactionService();

export async function getUserAccount(userEmail: string) {
  const user = await userService.getByEmail(userEmail);

  if (!user) notFound();

  return user;
}

export async function getAccountTransactions(accountId: number) {
  const transactions = await transactionService.getTransactionsByAccounId(
    accountId
  );

  return transactions;
}

export async function getTransaction(transactionId: number) {
  const transaction = await transactionService.getById(transactionId);

  if (!transaction) notFound();

  return transaction;
}

export async function createTransaction(transactionData: CreateTransactionDTO) {
  const transaction = await transactionService.create(transactionData);

  return transaction;
}

export async function updateTransaction(
  transactionId: number,
  transactionData: UpdateTransactionDTO
) {
  const transaction = await transactionService.update(
    transactionId,
    transactionData
  );

  return transaction;
}

export async function deleteTransaction(transactionId: number) {
  await transactionService.delete(transactionId);
}
