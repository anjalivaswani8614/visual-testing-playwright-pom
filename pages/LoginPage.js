export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator('input[type="email"]');
    this.passwordField = page.locator('input[type="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.captcha = page.locator('.captcha');
    this.timestamp = page.locator('.timestamp');
    this.notification = page.locator('.notification-area');
  }

  async open() {
    await this.page.goto('/login');
    await this.page.waitForSelector('input[type="email"]');
  }

  async maskDynamicElements() {
    await this.page.evaluate(() => {
      const selectors = ['.ad-banner', '.toast', '.popup', '.loader', '.notification'];
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => (el.style.display = 'none'));
      });
    });
  }
}
