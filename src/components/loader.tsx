import clsx from "clsx";

interface LoaderProps {
  className?: string;
  size?: "small" | "medium";
}

export default function Loader({ className, size = "medium" }: LoaderProps) {
  return (
    <div
      className={clsx(
        "border-4 border-cyan-100 border-t-4 border-t-cyan-300 rounded-[50%] w-32 h-32 animate-spin",
        { "w-16 h-16 border-2 border-t-2": size === "small" },
        className
      )}
    />
  );
}
