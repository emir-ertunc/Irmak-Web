import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-bold shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[#E85D8F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF8F2] disabled:pointer-events-none disabled:opacity-55";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#F78FB3] text-[#3F1D2B] hover:-translate-y-0.5 hover:bg-[#E85D8F] hover:text-white",
  secondary:
    "border border-[#3F1D2B]/15 bg-white/75 text-[#3F1D2B] hover:-translate-y-0.5 hover:border-[#F78FB3]",
  ghost: "bg-transparent text-[#3F1D2B] shadow-none hover:bg-[#FCE7F0]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm"
};

export function buttonClasses({
  className = "",
  size = "md",
  variant = "primary"
}: {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} = {}) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function Button({
  children,
  className,
  icon,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ className, size, variant })}
      type={type}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

type LinkButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  icon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function LinkButton({
  children,
  className,
  href,
  icon,
  size,
  variant
}: LinkButtonProps) {
  return (
    <Link className={buttonClasses({ className, size, variant })} href={href}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}
