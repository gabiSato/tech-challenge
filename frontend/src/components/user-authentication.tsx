"use client";
import UserAuthenticationForm from "@/components/user-authentication-form";
import UserModal from "@/components/user-modal";

import UserAuthImage from "../../public/images/user-auth.svg";

export default function UserAuthentication() {
  return (
    <>
      <button>click</button>
      <UserModal>
        <UserModal.Image>
          <UserAuthImage className="w-full" />
        </UserModal.Image>

        <UserModal.Title className="text-center">Login</UserModal.Title>

        <UserAuthenticationForm />
      </UserModal>
    </>
  );
}
