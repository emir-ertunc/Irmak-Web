import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes
} from "react";

export function FieldLabel({
  children,
  className = "",
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
}) {
  return (
    <label
      className={["block text-sm font-bold text-[#3F1D2B]", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </label>
  );
}

export function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={[
        "mt-2 w-full rounded-lg border border-[#3F1D2B]/15 bg-white px-4 py-3 text-sm text-[#3F1D2B] outline-none transition placeholder:text-[#5B3343]/55 focus:border-[#E85D8F] focus:ring-2 focus:ring-[#FFD6E7]",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function Select({
  children,
  className = "",
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
}) {
  return (
    <select
      className={[
        "mt-2 w-full rounded-lg border border-[#3F1D2B]/15 bg-white px-4 py-3 text-sm font-semibold text-[#3F1D2B] outline-none transition focus:border-[#E85D8F] focus:ring-2 focus:ring-[#FFD6E7]",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </select>
  );
}
