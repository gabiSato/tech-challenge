import { User } from "@/types/User";

export interface IUserRepository {
  getByEmail(email: string): Promise<User | null>;
}
