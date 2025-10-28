# 🎭 Playwright Visual Testing with Page Object Model (POM)

This is a **ready-to-use Playwright visual regression testing setup** built with the **Page Object Model** design pattern.  
Perfect for testing large web applications, rebrands, and responsive UIs.

---

## 🚀 Setup Instructions

1. **Unzip or clone this repository**
   ```bash
   git clone https://github.com/your-org/playwright-visual-tests-pom.git
   cd playwright-visual-tests-pom
   ```

2. **Install dependencies**
   ```bash
   npm install
   npx playwright install
   ```

3. **Run visual tests**
   ```bash
   npm test
   ```

4. **Update baseline snapshots**
   ```bash
   npm run update-snapshots
   ```
5. npx playwright test --browser=chrome
---

## 🧠 Project Structure

```
playwright-visual-tests-pom/
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
├── tests/
│   ├── login.spec.js
│   ├── dashboard.spec.js
├── playwright.config.js
├── package.json
├── README.md
└── .github/workflows/visual-tests.yml
```

---

## 🧩 Highlights

✅ Uses **Page Object Model** for cleaner test structure  
✅ Handles **dynamic regions** via masking and element hiding  
✅ Supports **mobile + desktop snapshots**  
✅ Integrated **GitHub Actions CI** for automated runs  
✅ Includes **update-snapshots** command for baseline regeneration  

---

## ⚙️ CI Setup (GitHub Actions)

The CI workflow (`.github/workflows/visual-tests.yml`) will:
1. Run on every push or pull request to `main`
2. Install dependencies and browsers
3. Execute visual tests headlessly
4. Upload visual diff artifacts (if any) under **Actions → Artifacts**

---

## 💡 Tips

- Keep your baseline images committed to version control.
- Use `--update-snapshots` only when UI changes are expected.
- Always run CI tests in the same resolution/device config for consistent diffs.

---

## 🧑‍💻 License

MIT License — free for personal and commercial use.

---

Happy testing, and may your pixels always align! ✨
Visual testing triggers are explicit

Playwright only performs visual comparison when you call toHaveScreenshot().

If a test doesn’t have toHaveScreenshot(), no visual diff happens for that page or element.

2️⃣ Scope: Page-level vs Element-level
A. Full-page visual testing
await expect(page).toHaveScreenshot('dashboard-full.png', { fullPage: true });


Compares the entire visible page.

Any visual changes anywhere on the page (buttons, backgrounds, charts, etc.) are detected.

B. Element-level visual testing
await expect(dashboard.submitButton).toHaveScreenshot('submit-button.png');


Compares just the specific element.

Useful for reusable components, buttons, cards, modals, etc.

You can do this for multiple elements in the same page — each will have its own baseline and diff.

3️⃣ How to apply across all pages/elements

One test per page: toHaveScreenshot(page) → triggers visual test for the full page.

Multiple tests per page: split by components/elements → allows finer control, masking dynamic elements individually.

Best practice for large apps:

Full-page screenshot for major layout changes.

Element-level screenshots for critical components (buttons, forms, navbars).

This way, any change in UI design or rebranding triggers a failure wherever it matters.