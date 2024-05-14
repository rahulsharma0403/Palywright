import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;


Given('User navigates to the application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://staging-demo.yuja.com/");
});

Given('User Click on the login link', async function () {
  await page.locator("//button[@id='loginBtn']").click();
});

Given('User enter the username as {string}', async function (username) {
  await page.locator("//input[@id='loginuserid']").fill(username);
});``

Given('User enter the password as {string}', async function (password) {
  await page.locator("//input[@id='password']").fill(password);
});

When('User click on the login button', async function () {
  await page.locator("//button[@id='loginButton']").click();
});

Then('Login should be success', async function () {
  await expect (page.locator("#topBarTabName3")).toHaveText('Manage Media');
  console.log("Login in is a success")
  await browser.close();
});

When('Login should fail', async function () {
  //const text = page.locator("div[id='loginMessage'] div div span").textContent();   
  //await expect(text).toBeVisible();await expect(page.getByTestId('status')).toHaveText('Submitted');
  //await expect(page.getByText('Unable to log in: Invalid Credentials')).toBeVisible();
  await expect (page.locator("div[id='loginMessage'] div div span")).toHaveText('Unable to log in: Invalid Credentials');
  await browser.close();
});
