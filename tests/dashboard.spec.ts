import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test.describe('Dashboard Page', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('Should display Dashboard heading', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await expect(dashboard.headerTitle).toBeVisible();
  });

  test('Should display Time at Work widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await expect(dashboard.timeAtWorkWidget).toBeVisible();
  });

  test('Should display Quick Launch widget', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await expect(dashboard.quickLaunchWidget).toBeVisible();
  });

  test('Should navigate to Leave List from Quick Launch', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.leaveListButton.click();
    await expect(page).toHaveURL(/leave/);
  });

}); 