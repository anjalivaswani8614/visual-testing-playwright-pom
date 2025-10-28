export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('.username');
    this.chartContainer = page.locator('.chart-container');
    this.liveFeed = page.locator('.live-feed');
  }

  async open() {
    await this.page.goto('/dashboard');
    await this.page.waitForLoadState('networkidle');
  }

  async maskDynamicElements() {
    await this.page.evaluate(() => {
      const dynamicSelectors = ['.username', '.chart-container', '.live-feed'];
      dynamicSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => (el.style.opacity = '0'));
      });
    });
  }
}
