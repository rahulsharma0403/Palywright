import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

//let  media_library = page.locator('#firstPartText');

Given('User navigates to the application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://staging-demo.yuja.com/");
});


Given('User Click on the login link', async function () {
  await page.locator("//button[@id='loginBtn']").click();
});

Given('User enter the username as {string}', { timeout: 120000 },async function (username) {
  await page.locator("//input[@id='loginuserid']").fill(username);
});

Given('User enter the password as {string}', async function (password) {
  await page.locator("//input[@id='password']").fill(password);
});

When('User click on the login button', async function () {
  await page.locator("//button[@id='loginButton']").click();
});

Then('Login should be success',  { timeout: 120000 },async function () {
  
  expect (page.locator("#topBarTabName3")).toBeVisible({timeout: 10000});
  await expect (page.locator("#topBarTabName3")).toContainText('Manage Media');
  console.log("Login in is a success");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var manage_media = page.locator("#topBarTabName3");
  await manage_media.click();
  var media_library = page.locator('#firstPartText');
  await expect (media_library).toContainText('Media Library');
  var create_recording = page.locator('#topBarTabName2');
  await expect (create_recording).toContainText('Create Recording')
  var video_conference = page.locator('#topBarTabName1');
  await expect (video_conference).toContainText('Video Conference');
  var new_folder = page.locator("div[id='btnNewFolder'] span[class='file-explore-icon']");
  await expect (new_folder).toContainText('NEW FOLDER');
  var new_playlist = page.locator ("div[id='btnNewPlaylist'] span[class='file-explore-icon']");
  await expect (new_playlist).toContainText('NEW PLAYLIST');
  var upload = page.locator("div[id='btnUploadMedia'] span[class='file-explore-icon']");
  await expect(upload).toContainText('UPLOAD');
  var more_actions = page.locator("span[class='btn btn-sm btn-link'] span[class='file-explore-icon']");
  await expect (more_actions).toContainText('MORE ACTIONS');
  var sort = page.locator("button[title='Sort']");
  await expect(sort).toContainText('SORT');
  var my_media = page.locator("div[title='My Media'] span");
  await expect(my_media).toContainText('My Media');
  var shared_with_me = page.locator("div[title='Shared With Me'] span");
  await expect(shared_with_me).toContainText('Shared With Me');
  var favorites = page.locator("div[title='Favorites'] span");
  await expect(favorites).toContainText('Favorites');
  var shared_with_others = page.locator("div[title='Shared With Others'] span");
  await expect(shared_with_others).toContainText('Shared With Others');
  var playlist = page.locator("div[title='Playlists'] span");
  await expect(playlist).toContainText('Playlists');
  var shared = page.locator("#Media-library-sidebar-shared");
  await expect(shared).toContainText('SHARED');
  var enterprisetube = page.locator("div[title='EnterpriseTube'] span");
  await expect(enterprisetube).toContainText('EnterpriseTube');
  var internal_library = page.locator("div[title='Internal Library'] span");
  await expect(internal_library).toContainText('Internal Library');
  var course_channels = page.locator("div[title='Course Channels'] span");
  await expect(course_channels).toContainText('Course Channels');
  var user_collections = page.locator("div[title='User Collections'] span");
  await expect(user_collections).toContainText('User Collections');
  var archive = page.locator("#Media-library-sidebar-archive");
  await expect(archive).toContainText('ARCHIVE');
  var my_archive = page.locator("#Media-library-sidebar-archive");
  await expect(my_archive).toContainText('ARCHIVE');
  await browser.close();
});

When('Login should fail', async function () {
  //const text = page.locator("div[id='loginMessage'] div div span").textContent();   
  //await expect(text).toBeVisible();await expect(page.getByTestId('status')).toHaveText('Submitted');
  //await expect(page.getByText('Unable to log in: Invalid Credentials')).toBeVisible();
  await expect (page.locator("div[id='loginMessage'] div div span")).toHaveText('Unable to log in: Invalid Credentials');
  await browser.close();
});
