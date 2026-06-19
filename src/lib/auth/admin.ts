import type { User } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { tableNames } from "@/lib/supabase/schema";
import type { AdminUser } from "@/types/models";

type AdminUserRow = {
  active: boolean;
  auth_user_id: string;
  created_at: string;
  email: string;
  full_name: string | null;
  id: string;
  role: AdminUser["role"];
  updated_at: string;
};

export type AdminAuthState =
  | {
      message: string;
      status: "missing-config" | "unauthenticated" | "unauthorized";
    }
  | {
      adminUser: AdminUser;
      status: "authorized";
      user: User;
    };

function mapAdminUser(row: AdminUserRow): AdminUser {
  return {
    active: row.active,
    authUserId: row.auth_user_id,
    createdAt: row.created_at,
    email: row.email,
    fullName: row.full_name,
    id: row.id,
    role: row.role,
    updatedAt: row.updated_at
  };
}

export async function getAdminAuthState(): Promise<AdminAuthState> {
  let supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>;

  try {
    supabase = await createSupabaseServerClient();
  } catch {
    return {
      message: "Supabase ortam değişkenleri tanımlı değil.",
      status: "missing-config"
    };
  }

  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      message: "Admin paneli için oturum açılmalıdır.",
      status: "unauthenticated"
    };
  }

  const { data, error } = await supabase
    .from(tableNames.adminUsers)
    .select(
      "id, auth_user_id, email, full_name, role, active, created_at, updated_at"
    )
    .eq("auth_user_id", user.id)
    .eq("active", true)
    .maybeSingle();

  if (error || !data) {
    return {
      message: "Bu kullanıcı için aktif admin yetkisi bulunamadı.",
      status: "unauthorized"
    };
  }

  return {
    adminUser: mapAdminUser(data as AdminUserRow),
    status: "authorized",
    user
  };
}
