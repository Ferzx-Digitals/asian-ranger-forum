import { expect, test } from "@playwright/test";
import { z } from "zod";
import { decodeSignedCookie, encodeSignedCookie } from "./signed-cookie";

const secret = "test-secret-that-is-longer-than-thirty-two-characters";
const stateSchema = z.object({
  email: z.string().email(),
  expiresAt: z.number().int().positive(),
});
const state = {
  email: "invited@example.com",
  expiresAt: 1_800_000_000_000,
};

test("accepts an untampered cookie for its exact purpose", () => {
  const cookie = encodeSignedCookie(secret, "otp-cooldown", state);

  expect(
    decodeSignedCookie(secret, "otp-cooldown", cookie, stateSchema),
  ).toEqual(state);
});

test("rejects copying a signed cooldown cookie into the verified cookie", () => {
  const cooldownCookie = encodeSignedCookie(secret, "otp-cooldown", state);

  expect(
    decodeSignedCookie(
      secret,
      "registration-verification",
      cooldownCookie,
      stateSchema,
    ),
  ).toBeNull();
});

test("rejects payload and signature tampering", () => {
  const cookie = encodeSignedCookie(secret, "registration-verification", state);
  const [payload, signature] = cookie.split(".");

  expect(
    decodeSignedCookie(
      secret,
      "registration-verification",
      `${payload}A.${signature}`,
      stateSchema,
    ),
  ).toBeNull();
  expect(
    decodeSignedCookie(
      secret,
      "registration-verification",
      `${payload}.${signature}A`,
      stateSchema,
    ),
  ).toBeNull();
});
