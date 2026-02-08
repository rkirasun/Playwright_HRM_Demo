import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly headerTitle: Locator;
  readonly timeAtWorkWidget: Locator;
  readonly quickLaunchWidget: Locator;
  readonly assignLeaveButton: Locator;
  readonly leaveListButton: Locator;
  readonly timesheetsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerTitle = page.getByRole('heading', { name: 'Dashboard' });
    this.timeAtWorkWidget = page.getByText('Time at Work');
    this.quickLaunchWidget = page.getByText('Quick Launch');
    this.assignLeaveButton = page.getByRole('button', { name: 'Assign Leave' });
    this.leaveListButton = page.getByRole('button', { name: 'Leave List' });
    this.timesheetsButton = page.getByRole('button', { name: 'Timesheets' });
  }
}