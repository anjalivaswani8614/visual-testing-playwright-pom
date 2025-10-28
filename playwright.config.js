import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000, // optional, 60s per test
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 200 // allowed pixel differences for visual tests
    }
  },
  use: {
    // Use your installed Chrome instead of Playwright Chromium
    browserName: 'chromium',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // 👈 update to your Chrome path
    headless: false,  // set to true if you want headless runs
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://your-app-url.com', // 👈 optional, your app base URL
  },
  projects: [
    {
      name: 'Google Chrome',
      use: { channel: 'chrome' } // optional if using installed Chrome via channel
    },
  ],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
});

