import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { testData } from "../data/testData";

test.describe("Login Feature", () => {
  // Test case 1: Valid Login
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      testData.validUser.username,
      testData.validUser.password
    );

    // Assert that the user is redirected to the dashboard
    await expect(page).toHaveURL(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
    await expect(page.locator("h1")).toContainText("Logged In Successfully");
    await expect(page.locator("strong")).toContainText(
      "Congratulations student. You successfully logged in!"
    );
    const logout_button = page.locator("'Log out'");
    await expect(logout_button).toBeVisible();
  });
  // Test case 2: Negative username test - invalid Username
  test("should show error message with invalid username", async ({ page }) => {
    // Enter Invalid username and valid password
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      testData.invalidUserName.username,
      testData.invalidUserName.password
    );

    // Assert that the user is redirected to the dashboard
    const locator = page.locator("#error");
    await expect(locator).toBeVisible();
    await expect(locator).toContainText("Your username is invalid!");
  });
  // Test case 3: Negative password test - invalid Password
  test("should should show error message with invalid password", async ({
    page,
  }) => {
    // Enter valid username and Invalid password
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      testData.invalidUserPassword.username,
      testData.invalidUserPassword.password
    );

    // Assert that the user is redirected to the dashboard
    const locator = page.locator("#error");
    await expect(locator).toBeVisible();
    await expect(locator).toContainText("Your password is invalid!");
  });
  // Test case 4: // Submit the form with an empty username and empty password
  test("should show", async ({ page }) => {
    // Enter empty username and empty password
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(
      testData.emptyCredentials.username,
      testData.emptyCredentials.password
    );

    // Assert that the user is redirected to the dashboard
    const locator = page.locator("#error");
    await expect(locator).toBeVisible();
    await expect(locator).toContainText("Your username is invalid!");
  });
});
