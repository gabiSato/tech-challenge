"use client";
import { useState } from "react";

import NewUserForm from "@/app/home/components/new-user-form";
import UserModal from "@/app/home/components/user-modal";
import Button, { ButtonVariant } from "@/components/button";

import UserAccountImage from "@@/public/images/user-account.svg";

interface NewUserModalProps {
  triggerButtonVariant?: ButtonVariant;
}

export default function NewUserModal({
  triggerButtonVariant = "green-primary",
}: NewUserModalProps) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <Button
        className="lg:w-[180px]"
        variant={triggerButtonVariant}
        onClick={openModal}
      >
        Abrir conta
      </Button>

      <UserModal open={open} onOpenChange={setOpen}>
        <UserModal.Image>
          <UserAccountImage className="w-full" />
        </UserModal.Image>

        <UserModal.Title>
          Preencha os campos abaixo para criar sua conta corrente!
        </UserModal.Title>

        <NewUserForm />
      </UserModal>
    </>
  );
}
