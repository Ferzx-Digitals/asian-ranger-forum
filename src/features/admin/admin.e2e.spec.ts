import { expect, test } from "@playwright/test";

const adminPassword = process.env.ADMIN_PASSWORD;
const baseUrl = process.env.ADMIN_BASE_URL ?? "http://localhost:3000";

test.describe("registration admin", () => {
  test.skip(
    !adminPassword,
    "ADMIN_PASSWORD is required for the admin e2e test.",
  );

  test("protects the dashboard and opens it with the configured password", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto(
      `${baseUrl}/admin/files/00000000-0000-4000-8000-000000000000/passport`,
    );
    await expect(page).toHaveURL(`${baseUrl}/admin`);
    await expect(
      page.getByRole("heading", { name: "Registration admin" }),
    ).toBeVisible();

    await page.getByLabel("Password").fill("incorrect-admin-password");
    await page.getByRole("button", { name: "Open dashboard" }).click();
    await expect(
      page.getByText("The password is incorrect.", { exact: true }),
    ).toBeVisible();

    await page.getByLabel("Password").fill(adminPassword ?? "");
    await Promise.all([
      page.waitForResponse(
        (response) =>
          response.url() === `${baseUrl}/admin` &&
          response.request().method() === "POST",
      ),
      page.getByRole("button", { name: "Open dashboard" }).click(),
    ]);
    await expect(page).toHaveURL(`${baseUrl}/admin`);
    await expect(
      page.getByRole("heading", { name: "Registration entries" }),
    ).toBeVisible();
    await expect(
      page.getByText("Total registrations", { exact: true }),
    ).toBeVisible();

    const documentLinks = page.locator('a[href^="/admin/files/"]');
    const documentLinkCount = await documentLinks.count();
    expect(documentLinkCount).toBeGreaterThan(0);

    const documentHref = await documentLinks.first().getAttribute("href");
    expect(documentHref).toBeTruthy();
    const downloadResponse = await page
      .context()
      .request.get(`${baseUrl}${documentHref}`);
    expect(downloadResponse.ok()).toBe(true);
    expect(downloadResponse.headers()["content-disposition"]).toContain(
      "attachment;",
    );
    expect(downloadResponse.headers()["cache-control"]).toContain("no-store");

    await page.reload();
    await expect(
      page.getByRole("heading", { name: "Registration entries" }),
    ).toBeVisible();

    if (process.env.ADMIN_CAPTURE_SCREENSHOTS === "1") {
      await page.screenshot({
        fullPage: true,
        path: "/tmp/asian-ranger-admin-desktop.png",
      });
      await page.setViewportSize({ height: 844, width: 390 });
      await page.screenshot({
        fullPage: true,
        path: "/tmp/asian-ranger-admin-mobile.png",
      });
    }

    expect(consoleErrors).toEqual([]);
  });
});
