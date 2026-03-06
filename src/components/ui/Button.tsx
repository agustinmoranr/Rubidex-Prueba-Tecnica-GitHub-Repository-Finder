import { cn } from "../../utils/cn";

export function Button({
  children,
  className,
  ...props
}: React.JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1 h-10 bg-primary text-primary-foreground px-6 rounded-md font-medium text-sm [&>svg]:size-4",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
