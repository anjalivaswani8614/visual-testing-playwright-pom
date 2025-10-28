import { test, expect, devices } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage.js';

test.describe('Dashboard Visual Tests', () => {
  test('Desktop visual diff', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.open();
    await dashboard.maskDynamicElements();

    await expect(page).toHaveScreenshot('dashboard-desktop.png', {
      fullPage: true,
      animations: 'disabled',
      mask: [dashboard.username, dashboard.chartContainer, dashboard.liveFeed],
      maskColor: '#ffffff'
    });
  });

  test.use({ ...devices['iPhone 14 Pro'] });
  test('Mobile visual diff', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.open();
    await dashboard.maskDynamicElements();

    await expect(page).toHaveScreenshot('dashboard-mobile.png', {
      fullPage: true,
      animations: 'disabled',
      mask: [dashboard.username, dashboard.chartContainer, dashboard.liveFeed],
      maskColor: '#ffffff'
    });
  });
});
