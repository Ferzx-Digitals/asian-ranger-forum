import { downloadRegistrationFile } from "@/features/admin";

export async function GET(
  request: Request,
  context: {
    params: Promise<{ kind: string; registrationId: string }>;
  },
) {
  const { kind, registrationId } = await context.params;

  return downloadRegistrationFile(request.url, registrationId, kind);
}
