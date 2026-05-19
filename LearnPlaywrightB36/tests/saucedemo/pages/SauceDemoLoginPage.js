export class SauceDemoLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async navigateTo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username) {
    await this.usernameField.click();
    await this.usernameField.fill(username);
  }

  async fillPassword(password) {
    await this.passwordField.click();
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async verifyPageTitle() {
    await this.pageTitle.click();
    return await this.pageTitle.isVisible();
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
