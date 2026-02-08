import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Page', () => {

  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'wrongpass');

    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('Login with empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginButton.click();

    await expect(loginPage.emptyUsernameError).toHaveCount(2);
  });

  test('Should navigate to Forgot Password page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.forgotPasswordLink.click();
  
    await expect(loginPage.resetPasswordTitle).toBeVisible();
  });
  
  test('Should reset password successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.forgotPasswordLink.click();
    await loginPage.resetUsernameInput.fill('Admin');
    await loginPage.resetButton.click();
    await expect(loginPage.resetSuccessMessage).toBeVisible({ timeout: 15000 });
});
  
  test('Should reset password with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.forgotPasswordLink.click();
    await loginPage.resetButton.click();
  
    await expect(page.getByText('Required')).toBeVisible();
  });

});