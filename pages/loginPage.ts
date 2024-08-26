import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private _page: Page) {}

  async navigate() {
    await this._page.goto(
      "https://practicetestautomation.com/practice-test-login/"
    );
  }

  async login(username: string, password: string) {
    await this._page.fill("#username", username);
    await this._page.fill("#password", password);
    await this._page.click("'Submit'");
  }
}
