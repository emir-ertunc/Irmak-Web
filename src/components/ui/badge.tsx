import type { ReactNode } from "react";

type BadgeTone = "pink" | "lemon" | "mint" | "lavender";

const toneClasses: Record<BadgeTone, string> = {
  pink: "bg-[#FCE7F0] text-[#E85D8F]",
  lemon: "bg-[#FFF4A8] text-[#6E4A00]",
  mint: "bg-[#DFF8EB] text-[#236045]",
  lavender: "bg-[#ECE7FF] text-[#5A479D]"
};

export function Badge({
  children,
  className = "",
  tone = "pink"
}: {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
}) {
  return (
    <span
      className={[
        "inline-flex min-h-7 items-center rounded-full px-3 py-1 text-xs font-bold uppercase",
        toneClasses[tone],
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
