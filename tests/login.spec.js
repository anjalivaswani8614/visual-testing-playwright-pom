import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Login Page Visual Tests', () => {
  test('Visual snapshot with masked regions', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.maskDynamicElements();

    await expect(page).toHaveScreenshot('login-page.png', {
      mask: [login.captcha, login.timestamp, login.notification],
      maskColor: '#ffffff',
      animations: 'disabled',
      fullPage: true
    });
  });
});
