import { UserAccountContext } from "@/contexts/user-account-context";
import { useContext } from "react";

export function useUserAccount() {
  const userAccountContext = useContext(UserAccountContext);

  if (!userAccountContext) {
    throw new Error("useUserAccount hook must be used within a UserProvider");
  }

  return userAccountContext;
}
