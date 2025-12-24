import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

// Updated interface to include 'size' and more specific variants
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// Updated to use CSS Variables from your tailwind.css/config
const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary shadow-sm",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90 focus:ring-secondary",
  outline: "border border-border bg-transparent text-foreground hover:bg-slate-100 focus:ring-slate-300",
  ghost: "bg-transparent text-foreground hover:bg-slate-100 focus:ring-slate-100",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive",
};

// New size mapping to resolve the Header.tsx error
const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-6 py-2 text-sm",
  lg: "h-12 px-8 text-base", // This fixes Header.tsx line 164
  icon: "h-10 w-10",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={[
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? "w-full" : "",
          className,
        ].join(" ")}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;