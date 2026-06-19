"use client";

import Link from "next/link";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { LinkButton } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Atölye" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/sepet", label: "Sepet" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-[#FFF8F2]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-10">
        <Link
          className="inline-flex items-center gap-2 text-base font-black text-[#3F1D2B] outline-none transition hover:text-[#E85D8F] focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
          href="/"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#FCE7F0] text-[#E85D8F]">
            <Heart aria-hidden="true" size={18} />
          </span>
          <span>Irmak</span>
        </Link>

        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Ana menü"
        >
          {navItems.map((item) => (
            <Link
              className="rounded-lg px-4 py-2 text-sm font-bold text-[#5B3343] outline-none transition hover:bg-[#FCE7F0] hover:text-[#3F1D2B] focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton
            href="/sepet"
            icon={<ShoppingBag aria-hidden="true" size={17} />}
            size="sm"
          >
            Sepet
          </LinkButton>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="grid size-10 place-items-center rounded-lg border border-[#3F1D2B]/15 bg-white/75 text-[#3F1D2B] shadow-sm outline-none transition hover:border-[#F78FB3] focus-visible:ring-2 focus-visible:ring-[#E85D8F] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? (
            <X aria-hidden="true" size={18} />
          ) : (
            <Menu aria-hidden="true" size={18} />
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/70 bg-[#FFF8F2] px-6 py-4 shadow-sm md:hidden">
          <nav className="mx-auto grid max-w-6xl gap-2" aria-label="Mobil menü">
            {navItems.map((item) => (
              <Link
                className="rounded-lg px-4 py-3 text-sm font-bold text-[#3F1D2B] outline-none transition hover:bg-[#FCE7F0] focus-visible:ring-2 focus-visible:ring-[#E85D8F]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
