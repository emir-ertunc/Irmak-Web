import { LogIn } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldLabel, Input } from "@/components/ui/form";

export default function AdminLoginPage() {
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
          <form className="mt-6 space-y-4">
            <FieldLabel>
              E-posta
              <Input placeholder="ornek@site.com" type="email" />
            </FieldLabel>
            <FieldLabel>
              Şifre
              <Input placeholder="********" type="password" />
            </FieldLabel>
            <LinkButton
              className="w-full"
              href="/admin"
              icon={<LogIn aria-hidden="true" size={17} />}
            >
              Panele Git
            </LinkButton>
          </form>
        </Card>
      </section>
    </main>
  );
}
