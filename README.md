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
