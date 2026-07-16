import { createHmac, timingSafeEqual } from "node:crypto";
import type { z } from "zod";

function createSignature(secret: string, purpose: string, value: string) {
  return createHmac("sha256", secret)
    .update(`cookie:${purpose}:${value}`)
    .digest("base64url");
}

function signaturesMatch(received: string, expected: string) {
  const receivedBuffer = Buffer.from(received, "base64url");
  const expectedBuffer = Buffer.from(expected, "base64url");

  return (
    receivedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(receivedBuffer, expectedBuffer)
  );
}

export function encodeSignedCookie(
  secret: string,
  purpose: string,
  payload: unknown,
) {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  return `${encodedPayload}.${createSignature(secret, purpose, encodedPayload)}`;
}

export function decodeSignedCookie<T>(
  secret: string,
  purpose: string,
  value: string | undefined,
  schema: z.ZodType<T>,
): T | null {
  if (!value) return null;

  const [encodedPayload, receivedSignature, ...extraParts] = value.split(".");
  if (!encodedPayload || !receivedSignature || extraParts.length > 0) {
    return null;
  }

  const expectedSignature = createSignature(secret, purpose, encodedPayload);
  if (!signaturesMatch(receivedSignature, expectedSignature)) return null;

  try {
    const payload: unknown = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    );
    const parsedPayload = schema.safeParse(payload);
    return parsedPayload.success ? parsedPayload.data : null;
  } catch {
    return null;
  }
}
