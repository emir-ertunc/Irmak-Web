import Link from "next/link";
import { Flower2, Mail, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-[#5B3343] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-[#FCE7F0] text-[#E85D8F]">
            <Flower2 aria-hidden="true" size={18} />
          </span>
          <div>
            <p className="font-black text-[#3F1D2B]">
              Irmak&apos;ın Minik Atölyesi
            </p>
            <p>El yapımı küçük mutluluklar.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-bold outline-none transition hover:bg-[#FCE7F0] focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
            href="/admin/giris"
          >
            <Mail aria-hidden="true" size={16} />
            Panel
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 font-bold outline-none transition hover:bg-[#FCE7F0] focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
            href="/urunler"
          >
            <Sparkles aria-hidden="true" size={16} />
            Vitrin
          </Link>
        </div>
      </div>
    </footer>
  );
}
