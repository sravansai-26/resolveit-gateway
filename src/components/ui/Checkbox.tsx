import { forwardRef, type InputHTMLAttributes } from "react";
import type { ReactNode } from "react";
import { Check, Minus } from "lucide-react";

type CheckboxSize = "sm" | "default" | "lg";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  description?: string;
  error?: string;
  indeterminate?: boolean;
  size?: CheckboxSize;
}

const sizeMap: Record<CheckboxSize, string> = {
  sm: "h-4 w-4",
  default: "h-4 w-4",
  lg: "h-5 w-5",
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      description,
      error,
      indeterminate = false,
      size = "default",
      disabled = false,
      required = false,
      checked,
      className = "",
      ...props
    },
    ref
  ) => {
    const checkboxId = id ?? undefined;

    return (
      <div className={`flex items-start gap-2 ${className}`}>
        {/* Checkbox box */}
        <label
          htmlFor={checkboxId}
          className={[
            "flex items-center justify-center rounded border transition-colors cursor-pointer",
            sizeMap[size],
            checked || indeterminate
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white border-slate-300",
            disabled ? "opacity-50 cursor-not-allowed" : "",
            error ? "border-red-600" : "",
          ].join(" ")}
        >
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className="sr-only"
            disabled={disabled}
            required={required}
            checked={checked}
            {...props}
          />

          {checked && !indeterminate && (
            <Check className="h-3 w-3" />
          )}

          {indeterminate && <Minus className="h-3 w-3" />}
        </label>

        {/* Text content */}
        {(label || description || error) && (
          <div className="space-y-1">
            {label && (
              <label
                htmlFor={checkboxId}
                className={`text-sm font-medium cursor-pointer ${
                  error ? "text-red-600" : "text-slate-900"
                }`}
              >
                {label}
                {required && (
                  <span className="text-red-600 ml-1">*</span>
                )}
              </label>
            )}

            {description && !error && (
              <p className="text-sm text-slate-500">
                {description}
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

/* ------------------------------------------------------------------ */
/* Checkbox Group                                                      */
/* ------------------------------------------------------------------ */

export interface CheckboxGroupProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export const CheckboxGroup = ({
  label,
  description,
  error,
  required = false,
  children,
  className = "",
}: CheckboxGroupProps) => {
  return (
    <fieldset className={`space-y-3 ${className}`}>
      {label && (
        <legend
          className={`text-sm font-medium ${
            error ? "text-red-600" : "text-slate-900"
          }`}
        >
          {label}
          {required && (
            <span className="text-red-600 ml-1">*</span>
          )}
        </legend>
      )}

      {description && !error && (
        <p className="text-sm text-slate-500">{description}</p>
      )}

      <div className="space-y-2">{children}</div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </fieldset>
  );
};
