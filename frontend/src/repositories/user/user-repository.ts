import { IUserRepository } from "./user-repository.interface";
import prisma from "@/lib/prisma";

import { User } from "@/types/User";

export class UserRepository implements IUserRepository {
  async getByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
      include: {
        account: {
          include: {
            transactions: {
              orderBy: {
                createdAt: "desc",
              },
            },
          },
        },
      },
    });
  }
}
