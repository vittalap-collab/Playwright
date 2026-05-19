import { test, expect } from '@playwright/test';
import { SauceDemoLoginPage } from './pages/SauceDemoLoginPage.js';
import testData from '../../testdata/saucedemo.json';

test('verify login as standard user', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  
  await loginPage.navigateTo();
  await loginPage.login(testData.username, testData.password);
  const isTitleVisible = await loginPage.verifyPageTitle();
  
  expect(isTitleVisible).toBeTruthy();
});