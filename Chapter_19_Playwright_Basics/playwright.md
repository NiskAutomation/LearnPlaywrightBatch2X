# Playwright Setup Commands

Below are the terminal commands used to set up and work with this Playwright project:

## 1. Set Execution Policy (PowerShell - Windows)
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## 2. Initialize Playwright Project (Recommended)
```bash
npm init playwright@latest
```

## 3. Initialize Node.js Project (Manual)
```bash
npm init -y
```

## 4. Install Playwright Library
```bash
npm install playwright
```

## 5. Install Playwright Test Runner (Fixes `import { test, expect } from '@playwright/test'` error)
```bash
npm install -D @playwright/test
```

## 6. Install Playwright Browsers
```bash
npx playwright install
```

## 7. Check Playwright Version
```bash
npx playwright --version
```

## 8. Run All Tests
```bash
npx playwright test
```

## 9. Run Tests in Headed Mode
```bash
npx playwright test --headed
```

## 10. Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 11. Run Specific Test File
```bash
npx playwright test example.spec.js
```

## 12. Run Tests with UI Mode
```bash
npx playwright test --ui
```

## 13. Generate Test Code (Codegen)
```bash
npx playwright codegen https://example.com
```

## 14. Show Test Report
```bash
npx playwright show-report
```

## 15. Install Specific Browser Only
```bash
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

## 16. Update Playwright
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
