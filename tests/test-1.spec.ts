import { test, expect } from '@playwright/test';

test.describe('login', () => {

  test('login with invalid username pw', async ({ page }) => {

    await page.goto('https://demo.testfire.net/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.locator('#passw').click();
    await page.locator('#passw').fill('123');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('login with valid username pw', async ({ page }) => {
    
    await page.goto('https://demo.testfire.net/login.jsp');
    await page.getByRole('row', { name: 'PERSONAL Deposit Product' }).getByRole('table').click();
    await page.locator('#passw').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
  });
});
