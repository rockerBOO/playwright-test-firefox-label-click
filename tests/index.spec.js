import { test, expect } from "@playwright/test";

// test("click a label", async ({ page }) => {
//   page.on("pageerror", (error) => {
//     console.error("Page error:", error.message);
//   });
//   await page.goto("/");
//   await page.getByText("Choose a file", {exact: true}).click();
// });

test("index", async ({ page }) => {
  page.on("pageerror", (error) => {
    console.error("Page error:", error.message);
  });
  await page.goto("/");
  await page.getByText("A second file").click();
});
