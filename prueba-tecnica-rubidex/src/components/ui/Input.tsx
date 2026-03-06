import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("px-4 rounded-md h-10 placeholder:text-text/65", className)}
      {...props}
    />
  );
}

export default Input;
