import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { Card } from "@/components/ui/card";
import { getAdminAuthState } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const authState = await getAdminAuthState();

  if (authState.status === "authorized") {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-center">
        <Card className="p-6">
          <p className="text-sm font-semibold uppercase text-[#E85D8F]">
            Yönetim girişi
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#3F1D2B]">
            Atölye paneli
          </h1>
          {authState.status === "missing-config" ? (
            <p className="mt-4 rounded-lg border border-[#E85D8F]/30 bg-[#FCE7F0] px-4 py-3 text-sm font-bold text-[#3F1D2B]">
              {authState.message}
            </p>
          ) : null}
          <AdminLoginForm />
        </Card>
      </section>
    </main>
  );
}
