import { CheckCircle2, Info } from "lucide-react";

type ToastTone = "success" | "info";

const toneIcon = {
  success: CheckCircle2,
  info: Info
};

export function Toast({
  message,
  tone = "info",
  title
}: {
  message: string;
  tone?: ToastTone;
  title: string;
}) {
  const Icon = toneIcon[tone];

  return (
    <div className="flex gap-3 rounded-lg border border-white/80 bg-white/90 p-4 text-[#3F1D2B] shadow-sm">
      <Icon aria-hidden="true" className="mt-0.5 text-[#E85D8F]" size={18} />
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[#5B3343]">{message}</p>
      </div>
    </div>
  );
}

export function ToastStack({
  items
}: {
  items: Array<{
    id: string;
    message: string;
    title: string;
    tone?: ToastTone;
  }>;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 grid w-[min(22rem,calc(100vw-2rem))] gap-3">
      {items.map((item) => (
        <Toast
          key={item.id}
          message={item.message}
          title={item.title}
          tone={item.tone}
        />
      ))}
    </div>
  );
}
