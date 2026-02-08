import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly emptyUsernameError: Locator;
  readonly forgotPasswordLink: Locator;
  readonly resetPasswordTitle: Locator;
  readonly resetUsernameInput: Locator;
  readonly resetButton: Locator;
  readonly resetSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Invalid credentials');
    this.emptyUsernameError = page.getByText('Required');
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.resetPasswordTitle = page.getByRole('heading', { name: 'Reset Password' });
    this.resetUsernameInput = page.getByPlaceholder('Username');
    this.resetButton = page.getByRole('button', { name: 'Reset Password' });
    this.resetSuccessMessage = page.getByText('Reset Password link sent successfully');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}