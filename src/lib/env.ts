import { z } from "zod";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.url()
});

const serverEnvSchema = publicEnvSchema.extend({
  APP_ENV: z
    .enum(["development", "preview", "production", "test"])
    .default("development"),
  ORDER_NOTIFICATION_ADDRESS: z.email().optional().or(z.literal("")),
  SUPABASE_DB_URL: z.string().optional().or(z.literal("")),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  UPLOAD_MAX_MB: z.coerce.number().int().positive().default(8)
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;
export type ServerEnv = z.infer<typeof serverEnvSchema>;

function formatEnvError(error: z.ZodError) {
  return error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join("; ");
}

export function getPublicEnv(): PublicEnv {
  const result = publicEnvSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
  });

  if (!result.success) {
    throw new Error(
      `Public ortam değişkenleri eksik: ${formatEnvError(result.error)}`
    );
  }

  return result.data;
}

export function getServerEnv(): ServerEnv {
  const result = serverEnvSchema.safeParse({
    APP_ENV: process.env.APP_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    ORDER_NOTIFICATION_ADDRESS: process.env.ORDER_NOTIFICATION_ADDRESS,
    SUPABASE_DB_URL: process.env.SUPABASE_DB_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    UPLOAD_MAX_MB: process.env.UPLOAD_MAX_MB
  });

  if (!result.success) {
    throw new Error(
      `Sunucu ortam değişkenleri eksik: ${formatEnvError(result.error)}`
    );
  }

  return result.data;
}
