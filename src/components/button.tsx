"use client";

import clsx from "clsx";
import Loader from "./loader";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  loading,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-[144px] sm:w-[250px] h-48 px-12  rounded-lg text-sm  font-semibold hover:opacity-80",
        variant === "primary"
          ? "bg-cyan-300 text-white"
          : "bg-cyan-100 text-cyan-200",
        loading && "flex items-center justify-center"
      )}
      type={type}
      {...props}
    >
      {loading ? <Loader size="small" /> : children}
    </button>
  );
}
