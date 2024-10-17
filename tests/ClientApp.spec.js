const { test, expect } = require('@playwright/test'); // Import Playwright's test module

// Test 1: Validating error during login
test('Browser Context-Validating Error login', async ({ page }) => {
  // Navigates to the login page
  await page.goto("https://rahulshettyacademy.com/client/auth/login");

  // Fills the email input field with ID #userEmail
  await page.locator("#userEmail").fill("anshika@gmail.com");

  // Fills the password input field with ID #userPassword
  await page.locator("#userPassword").type("Iamking@000");

  // Clicks the login button
  await page.locator("[value='Login']").click();

  // Waits for the first element with class .card-body b to appear
  await page.locator(".card-body b").first().waitFor();

  // Collects all text contents of elements with class .card-body b
  const titles = await page.locator(".card-body b").allTextContents();

  // Logs the fetched text contents to the console
  console.log(titles);
});

// Test 2: Testing various UI controls
test('UI controls', async ({ page }) => {
  // Navigates to the login page containing form elements
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Selects the username input field by ID #username
  const userName = page.locator('#username');

  // Selects the sign-in button by ID #signInBtn
  const signIn = page.locator("#signInBtn");

  // Selects a link containing 'documents-request' in its href attribute
  const documentLink = page.locator("[href*='documents-request']");

  // Selects a dropdown and selects the option with value "consult"
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");

  // Clicks the last radio button with class .radiotextsty
  await page.locator(".radiotextsty").last().click();

  // Clicks the OK button
  await page.locator("#okayBtn").click();

  // Logs whether the last radio button is checked
  console.log(await page.locator(".radiotextsty").last().isChecked());

  // Asserts that the last radio button is checked
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  // Clicks the checkbox for terms and conditions by ID #terms
  await page.locator("#terms").click();

  // Asserts that the last radio button is still checked
  await expect(page.locator(".radiotextsty").last()).toBeChecked();

  // Unchecks the terms checkbox
  await page.locator("#terms").uncheck();

  // Asserts that the terms checkbox is unchecked
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  // Asserts that the document link has the 'class' attribute with value 'blinkingText'
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
});

// Test 3: Handling child windows (new window)
test.only('@Child windows handle', async ({ browser }) => {
  // Creates a new browser context (a separate session)
  const context = await browser.newContext();

  // Opens a new page (tab) within the browser context
  const page = await context.newPage();

  // Selects the username input field by its ID #username
  const userName = page.locator('#username');

  // Navigates to the login page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // Selects the link containing 'documents-request' in its href attribute
  const documentLink = page.locator("[href*='documents-request']");

  // Waits for a new page (window) to open when the document link is clicked
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),  // Waits for the new page (window) event
    documentLink.click(),  // Clicks the link, which opens the new window
  ]);

  // In the new window, selects an element with class .red and gets its text content
  const text = await newPage.locator(".red").textContent();

  // Splits the text to extract domain part
  const arrayTest = text.split("@");
  const domain = arrayTest[1].split(" ")[0];
  console.log(domain);

  // Types the extracted domain back into the username field
  await page.locator("#username").type(domain);

  // Pauses the script for inspection/debugging
  await page.pause();

  // Logs the current content of the username field
  console.log(await page.locator("#username").textContent());
});
