"use client";
import clsx from "clsx";

export default function Input({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={clsx(
        "h-48 px-16 w-[250px] bg-white border border-cyan-300 rounded-lg outline-hidden text-sm text-neutral-600 placeholder:text-neutral-600",
        className
      )}
      {...props}
    />
  );
}
