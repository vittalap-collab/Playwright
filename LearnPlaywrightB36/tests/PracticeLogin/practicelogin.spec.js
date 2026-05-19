import { test, expect } from '@playwright/test';

// test case 1: Positive LogIn test
test('verify login with valid username and valid password', async ({ page }) => {
  // go to URL
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  // enter username
  await page.locator('input#username').fill('student');
  // enter password
  await page.locator('input#password').fill('Password123');
  // click submit button
  await page.locator('button#submit').click();
  // verify successful login - check URL
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  // verify success message
  await expect(page.locator('strong')).toContainText('Congratulations student');
  // verify logout button is displayed
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});

// test case 2: Negative username test
test('verify login with invalid username and valid password', async ({ page }) => {
  // go to URL
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  // enter invalid username
  await page.locator('input#username').fill('incorrectUser');
  // enter password
  await page.locator('input#password').fill('Password123');
  // click submit button
  await page.locator('button#submit').click();
  // verify error message
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
  // verify URL hasn't changed
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});

// test case 3: Negative password test
test('verify login with valid username and invalid password', async ({ page }) => {
  // go to URL
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  // enter username
  await page.locator('input#username').fill('student');
  // enter invalid password
  await page.locator('input#password').fill('incorrectPassword');
  // click submit button
  await page.locator('button#submit').click();
  // verify error message
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
  // verify URL hasn't changed
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});

// test case 4: Login and Logout flow
test('verify login and logout flow', async ({ page }) => {
  // go to URL
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  // enter username
  await page.locator('input#username').fill('student');
  // enter password
  await page.locator('input#password').fill('Password123');
  // click submit button
  await page.locator('button#submit').click();
  // verify successful login
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  // click logout button
  await page.getByRole('link', { name: 'Log out' }).click();
  // verify back on login page
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});
