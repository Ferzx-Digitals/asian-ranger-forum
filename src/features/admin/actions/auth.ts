"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import {
  adminPasswordMatches,
  createAdminSession,
  deleteAdminSession,
  isAdminAccessConfigured,
  isAdminAuthenticated,
} from "../admin-session";
import type { AdminLoginState } from "../login-state";

const loginSchema = z.object({
  password: z.string().min(1).max(512),
});

export async function loginAdmin(
  _previousState: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  if (!isAdminAccessConfigured()) {
    return {
      message:
        "Admin access is not configured. Add the required environment variables and redeploy.",
      status: "error",
    };
  }

  const parsed = loginSchema.safeParse({ password: formData.get("password") });
  if (!parsed.success || !adminPasswordMatches(parsed.data.password)) {
    return {
      message: "The password is incorrect.",
      status: "error",
    };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  if (await isAdminAuthenticated()) {
    await deleteAdminSession();
  }

  redirect("/admin");
}
