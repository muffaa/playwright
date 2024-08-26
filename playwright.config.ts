import { PlaywrightTestConfig, devices } from "@playwright/test";
const config: PlaywrightTestConfig = {

  timeout: 120000, // Give the timeout to resolve server gateway errors
  expect: { timeout: 15000 },
  testMatch: ["tests/login.spec.ts"],

  // Project-specific configurations for different browsers
  projects: [
    {
      name: "Chromium",
      use: {
        browserName: "chromium",
        headless: false,
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
        headless: false,
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
        browserName: "chromium",
      },
    },
  ],
};

export default config;
