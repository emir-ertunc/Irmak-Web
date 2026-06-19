"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function Modal({
  children,
  isOpen,
  onClose,
  title
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-[#3F1D2B]/35 px-4 backdrop-blur-sm"
      role="dialog"
    >
      <div className="w-full max-w-lg rounded-lg border border-white/80 bg-white p-5 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-[#3F1D2B]">{title}</h2>
          <Button
            aria-label="Kapat"
            icon={<X aria-hidden="true" size={18} />}
            onClick={onClose}
            size="sm"
            variant="ghost"
          >
            Kapat
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
