import { Flower2, Sparkles } from "lucide-react";

export function FlowerAccent({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "inline-flex size-9 items-center justify-center rounded-full bg-[#FCE7F0] text-[#E85D8F]",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Flower2 size={18} />
    </span>
  );
}

export function SparkleAccent({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "inline-flex size-8 items-center justify-center rounded-full bg-[#FFF4A8] text-[#E85D8F]",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Sparkles size={16} />
    </span>
  );
}
