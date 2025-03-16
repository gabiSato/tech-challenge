"use client";
import UserAuthenticationForm from "@/app/home/components/user-authentication-form";
import UserModal from "@/app/home/components/user-modal";

import UserAuthImage from "@@/public/images/user-auth.svg";

export default function UserAuthentication() {
  return (
    <UserModal>
      <UserModal.Image>
        <UserAuthImage className="w-full" />
      </UserModal.Image>

      <UserModal.Title className="text-center">Login</UserModal.Title>

      <UserAuthenticationForm />
    </UserModal>
  );
}
