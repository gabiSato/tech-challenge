const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Joana da Silva Oliveira",
      email: "joana@gmail.com",
      account: {
        create: {
          balanceInCents: 250045,
          transactions: {
            create: [
              {
                amountInCents: 3600,
                transactionType: "DEPOSIT",
                description: "Câmbio de Moedas",
              },
              {
                amountInCents: 5000,
                transactionType: "WITHDRAWAL",
                description: "DOC/TED",
              },
              {
                amountInCents: 8600,
                transactionType: "WITHDRAWAL",
                description: "DOC/TED",
              },
              {
                amountInCents: 2999,
                transactionType: "WITHDRAWAL",
                description: "DOC/TED",
              },
              {
                amountInCents: 500000,
                transactionType: "DEPOSIT",
                description: "Empréstimo e Financiamento",
              },
            ],
          },
        },
      },
    },
  });
}

main();
