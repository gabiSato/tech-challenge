"use client";
import React, { useState } from "react";

import Modal from "@/components/modal";
import clsx from "clsx";

interface UserModalProps {
  children: React.ReactNode;
}

function UserModal({ children }: UserModalProps) {
  const [open, setOpen] = useState(true);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <div className="h-dvh w-screen pt-56 px-16 pb-16 sm:max-w-[597px] sm:pt-32 lg:max-w-[792px]">
        <div className="flex flex-col gap-32 mx-auto sm:w-[445px] lg:w-[590px]">
          {children}
        </div>
      </div>
    </Modal>
  );
}

function Image({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto sm:max-w-[354px]">{children}</div>;
}

function Title({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={clsx("text-lg-bold lg:text-center", className)}>
      {children}
    </h1>
  );
}

UserModal.Image = Image;
UserModal.Title = Title;

export default UserModal;
