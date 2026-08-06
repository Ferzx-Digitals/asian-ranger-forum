import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const ADMIN_SESSION_COOKIE = `${
  process.env.NODE_ENV === "production" ? "__Host-" : ""
}arc_admin_session`;
const ADMIN_SESSION_DURATION_SECONDS = 8 * 60 * 60;
const ADMIN_SESSION_VERSION = 1;

interface AdminConfiguration {
  password: string;
  sessionSecret: string;
}

interface AdminSessionPayload {
  expiresAt: number;
  subject: "admin";
  version: typeof ADMIN_SESSION_VERSION;
}

function getAdminConfiguration(): AdminConfiguration | null {
  const password = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!password || password.length < 12) return null;
  if (!sessionSecret || sessionSecret.length < 32) return null;

  return { password, sessionSecret };
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest();
}

function constantTimeMatch(left: Buffer, right: Buffer) {
  return left.length === right.length && timingSafeEqual(left, right);
}

function encodeSession(payload: AdminSessionPayload, secret: string) {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  const signature = sign(encodedPayload, secret).toString("base64url");

  return `${encodedPayload}.${signature}`;
}

function isAdminSessionPayload(value: unknown): value is AdminSessionPayload {
  if (!value || typeof value !== "object") return false;

  const payload = value as Partial<AdminSessionPayload>;
  return (
    payload.subject === "admin" &&
    payload.version === ADMIN_SESSION_VERSION &&
    typeof payload.expiresAt === "number" &&
    Number.isSafeInteger(payload.expiresAt) &&
    payload.expiresAt > Date.now()
  );
}

function verifySessionToken(token: string, secret: string) {
  const [encodedPayload, encodedSignature, extra] = token.split(".");
  if (!encodedPayload || !encodedSignature || extra) return false;

  try {
    const suppliedSignature = Buffer.from(encodedSignature, "base64url");
    const expectedSignature = sign(encodedPayload, secret);

    if (!constantTimeMatch(suppliedSignature, expectedSignature)) return false;

    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    );
    return isAdminSessionPayload(payload);
  } catch {
    return false;
  }
}

export function isAdminAccessConfigured() {
  return getAdminConfiguration() !== null;
}

export function adminPasswordMatches(password: string) {
  const configuration = getAdminConfiguration();
  if (!configuration) return false;

  const suppliedPassword = sign(password, configuration.sessionSecret);
  const expectedPassword = sign(
    configuration.password,
    configuration.sessionSecret,
  );

  return constantTimeMatch(suppliedPassword, expectedPassword);
}

export async function createAdminSession() {
  const configuration = getAdminConfiguration();
  if (!configuration) throw new Error("Admin access is not configured.");

  const expiresAt = Date.now() + ADMIN_SESSION_DURATION_SECONDS * 1000;
  const token = encodeSession(
    {
      expiresAt,
      subject: "admin",
      version: ADMIN_SESSION_VERSION,
    },
    configuration.sessionSecret,
  );
  const cookieStore = await cookies();

  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    maxAge: ADMIN_SESSION_DURATION_SECONDS,
    path: "/",
    priority: "high",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function deleteAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const configuration = getAdminConfiguration();
  if (!configuration) return false;

  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  return token ? verifySessionToken(token, configuration.sessionSecret) : false;
}
