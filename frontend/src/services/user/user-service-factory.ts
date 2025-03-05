import { UserRepository } from "@/repositories/user/user-repository";
import { UserService } from "@/services/user/user-service";

export function makeUserService() {
  const repository = new UserRepository();
  const service = new UserService(repository);

  return service;
}
