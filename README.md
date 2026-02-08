# 🎭 Playwright - OrangeHRM Demo Automation

Automated end-to-end testing for [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) using Playwright with TypeScript.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rkirasun/Playwright_HRM_Demo
cd Playwirght_HRM_Demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (see the browser)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.ts
```

### Run tests with Playwright UI mode

```bash
npx playwright test --ui
```

### Generate test code (Codegen)

```bash
npx playwright codegen https://opensource-demo.orangehrmlive.com/
```

## 📊 Test Reports

### Show HTML report after test run

```bash
npx playwright show-report
```

### View trace file (for debugging failed tests)

```bash
npx playwright show-trace test-results/<trace-file>.zip
```

## 📁 Project Structure

```

```

## 🔑 Demo Credentials

| Field    | Value     |
| -------- | --------- |
| URL      | https://opensource-demo.orangehrmlive.com/ |
| Username | `Admin`   |
| Password | `admin123`|

## 🛠️ Tech Stack

- **Playwright** — E2E testing framework
- **TypeScript** — Type-safe test scripting
- **Page Object Model** — Design pattern for maintainable tests

## 📝 Notes

- OrangeHRM Demo resets data periodically, so avoid relying on specific employee records.
- Tests are configured to run on **Chromium**, **Firefox**, and **WebKit** by default (see `playwright.config.ts`).
