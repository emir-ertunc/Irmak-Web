"use client";

import { LogIn } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input } from "@/components/ui/form";
import { signInAdmin, type LoginActionState } from "@/server/actions/auth";

const initialState: LoginActionState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      disabled={pending}
      icon={<LogIn aria-hidden="true" size={17} />}
      type="submit"
    >
      {pending ? "Kontrol Ediliyor" : "Panele Git"}
    </Button>
  );
}

export function AdminLoginForm() {
  const [state, formAction] = useActionState(signInAdmin, initialState);

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <FieldLabel>
        E-posta
        <Input
          autoComplete="email"
          name="email"
          placeholder="ornek@site.com"
          type="email"
        />
      </FieldLabel>
      <FieldLabel>
        Şifre
        <Input
          autoComplete="current-password"
          name="password"
          placeholder="********"
          type="password"
        />
      </FieldLabel>
      {state.error ? (
        <p className="rounded-lg border border-[#E85D8F]/30 bg-[#FCE7F0] px-4 py-3 text-sm font-bold text-[#3F1D2B]">
          {state.error}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
