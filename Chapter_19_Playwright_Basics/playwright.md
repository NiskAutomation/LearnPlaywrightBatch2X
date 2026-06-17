# Playwright Setup Commands

Below are the terminal commands used to set up and work with this Playwright project:

## 1. Set Execution Policy (PowerShell - Windows)
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## 2. Initialize Node.js Project
```bash
npm init -y
```

## 3. Install Playwright Library
```bash
npm install playwright
```

## 4. Install Playwright Test Runner (Fixes `import { test, expect } from '@playwright/test'` error)
```bash
npm install -D @playwright/test
```

## 5. Install Playwright Browsers
```bash
npx playwright install
```

## 6. Check Playwright Version
```bash
npx playwright --version
```

## 7. Run All Tests
```bash
npx playwright test
```

## 8. Run Tests in Headed Mode
```bash
npx playwright test --headed
```

## 9. Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 10. Run Specific Test File
```bash
npx playwright test example.spec.js
```

## 11. Run Tests with UI Mode
```bash
npx playwright test --ui
```

## 12. Generate Test Code (Codegen)
```bash
npx playwright codegen https://example.com
```

## 13. Show Test Report
```bash
npx playwright show-report
```

## 14. Install Specific Browser Only
```bash
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

## 15. Update Playwright
```bash
npm update playwright
npm update -D @playwright/test
npx playwright install
```

---

### Why `import { test, expect } from '@playwright/test'` shows error?
**`playwright`** = Browser automation library only.
**`@playwright/test`** = Test runner with `test`, `expect`, and `page` fixtures.

Install it with: `npm install -D @playwright/test`

**Installed Version:** `playwright@^1.60.0`
