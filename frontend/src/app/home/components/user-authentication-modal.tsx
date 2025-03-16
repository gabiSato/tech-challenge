"use client";
import UserAuthenticationForm from "@/app/home/components/user-authentication-form";
import UserModal from "@/app/home/components/user-modal";
import Button, { ButtonVariant } from "@/components/button";

import UserAuthImage from "@@/public/images/user-auth.svg";
import React, { useState } from "react";

interface UserAuthenticationModalProps {
  triggerButtonVariant?: ButtonVariant;
}

export default function UserAuthenticationModal({
  triggerButtonVariant = "green-secondary",
}: UserAuthenticationModalProps) {
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
        Já tenho conta
      </Button>

      <UserModal open={open} onOpenChange={setOpen}>
        <UserModal.Image>
          <UserAuthImage className="w-full" />
        </UserModal.Image>

        <UserModal.Title className="text-center">Login</UserModal.Title>

        <UserAuthenticationForm />
      </UserModal>
    </>
  );
}
