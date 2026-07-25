import "server-only";

import { cookies } from "next/headers";
import { z } from "zod";
import {
  getRegistrationCookieSecret,
  registrationCookieOptions,
} from "./otp-state";
import { decodeSignedCookie, encodeSignedCookie } from "./signed-cookie";

const COOKIE_NAME_PREFIX =
  process.env.NODE_ENV === "production" ? "__Host-" : "";
const PASSPORT_UPLOAD_COOKIE_NAME = `${COOKIE_NAME_PREFIX}arc_registration_passport`;
const PASSPORT_UPLOAD_COOKIE_PURPOSE = "registration-passport-upload";
const PASSPORT_UPLOAD_EXPIRY_SECONDS = 30 * 60;

const passportUploadStateSchema = z.object({
  bucket: z.string().min(1).max(100),
  contentType: z.string().min(1).max(100),
  email: z.string().email(),
  expiresAt: z.number().int().positive(),
  originalName: z.string().min(1).max(255),
  path: z.string().min(1).max(500),
  reference: z.string().regex(/^ARC26-[A-Z0-9]{8}$/),
  size: z
    .number()
    .int()
    .positive()
    .max(4 * 1024 * 1024),
});

export type PassportUploadState = z.infer<typeof passportUploadStateSchema>;

export function createPassportUploadState(
  state: Omit<PassportUploadState, "expiresAt">,
): PassportUploadState {
  return {
    ...state,
    expiresAt: Date.now() + PASSPORT_UPLOAD_EXPIRY_SECONDS * 1000,
  };
}

export async function getPassportUploadState() {
  const cookieStore = await cookies();
  return decodeSignedCookie(
    getRegistrationCookieSecret(),
    PASSPORT_UPLOAD_COOKIE_PURPOSE,
    cookieStore.get(PASSPORT_UPLOAD_COOKIE_NAME)?.value,
    passportUploadStateSchema,
  );
}

export async function savePassportUploadState(state: PassportUploadState) {
  const cookieStore = await cookies();
  cookieStore.set(
    PASSPORT_UPLOAD_COOKIE_NAME,
    encodeSignedCookie(
      getRegistrationCookieSecret(),
      PASSPORT_UPLOAD_COOKIE_PURPOSE,
      state,
    ),
    registrationCookieOptions(PASSPORT_UPLOAD_EXPIRY_SECONDS),
  );
}

export async function clearPassportUploadState() {
  const cookieStore = await cookies();
  cookieStore.delete(PASSPORT_UPLOAD_COOKIE_NAME);
}
