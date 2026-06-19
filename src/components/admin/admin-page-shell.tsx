import type { ReactNode } from "react";

export function AdminPageShell({
  actions,
  children,
  eyebrow,
  title
}: {
  actions?: ReactNode;
  children: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-[#E85D8F]">
              {eyebrow}
            </p>
            <h1 className="mt-2 text-4xl font-bold text-[#3F1D2B]">{title}</h1>
          </div>
          {actions}
        </div>
        {children}
      </section>
    </main>
  );
}
