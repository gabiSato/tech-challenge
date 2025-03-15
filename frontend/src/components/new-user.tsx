"use client";
import NewUserForm from "@/components/new-user-form";
import UserModal from "@/components/user-modal";

import UserAccountImage from "../../public/images/user-account.svg";

export default function NewUser() {
  return (
    <UserModal>
      <UserModal.Image>
        <UserAccountImage className="w-full" />
      </UserModal.Image>

      <UserModal.Title>
        Preencha os campos abaixo para criar sua conta corrente!
      </UserModal.Title>

      <NewUserForm />
    </UserModal>
  );
}
