import { IUserRepository } from "@/repositories/user/user-repository.interface";
import type { User } from "@/types/User";

export class UserService {
  constructor(private repository: IUserRepository) {}

  async getByEmail(email: string): Promise<User | null> {
    return this.repository.getByEmail(email);
  }
}
