"use client";
import clsx from "clsx";

export default function Input({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={clsx(
        "h-48 px-16 w-[250px] bg-white border border-cyan-300 rounded-lg outline-none text-sm text-neutral-500 placeholder:text-neutral-500",
        className
      )}
      {...props}
    />
  );
}
