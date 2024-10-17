const {test, expect} = require('@playwright/test'); // Import Playwright test module

// Test 1: First Playwright test
test('First Playwright test', async ({browser, page})=>
{
    // Step 1: Opens the browser and navigates to the login page of the website
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // No additional steps provided in this test case for login actions
});

// Test 2: Validating login behavior using browser context
test.only('Browser Context Playwright test', async ({browser})=>
{   
    // Creates a new browser context, which simulates a clean, isolated browsing session
    const context = await browser.newContext();
    
    // Opens a new page (tab) in the browser context
    const page = await context.newPage();
    
    // Locates the username field by ID #username
    const userName = page.locator('#username');
    
    // Locates the sign-in button by ID #signInBtn
    const signIn = page.locator('#signInBtn');
    
    // Locates the elements for card titles (links inside card bodies)
    const cardTitles = page.locator(".card-body a");

    // Navigates to the login page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    // Logs the title of the current page
    console.log(await page.title());
    
    // Fills the username field with "rahulshetty"
    await userName.fill("rahulshetty");
    
    // Fills the password field with "learning"
    await page.locator("[type='password']").fill("learning");
    
    // Clicks the sign-in button
    await signIn.click();
    
    // Logs the error message displayed (likely after failed login attempt)
    console.log(await page.locator("[style*='block']").textContent());
    
    // Asserts that the error message contains the word 'Incorrect'
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    
    // Clears the username field and refills it with the correct value "rahulshettyacademy"
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    
    // Clicks the sign-in button again
    await signIn.click();
    
    // Logs the text of the first card title
    console.log(await cardTitles.first().textContent());
    
    // Logs the text of the second card title
    console.log(await cardTitles.nth(1).textContent());
    
    // Collects and logs the text of all card titles
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

// Test 3: Validating page title for Google
test.only('Page Playwright test', async ({page})=>
{
    // Navigates to Google's homepage
    await page.goto("https://google.com");
    
    // Logs the current page title
    console.log(await page.title());
    
    // Asserts that the page title is exactly "Google"
    await expect(page).toHaveTitle("Google");
});

// Test 4: Validating login error using browser context
test('@Web Browser Context-Validating Error login', async ({browser})=>
{
    // Creates a new browser context for isolated session
    const context = await browser.newContext();
    
    // Opens a new page (tab) in the browser context
    const page = await context.newPage();
    
    // Navigates to the login page
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    // Logs the title of the current page
    console.log(await page.title());
    
    // Fills the username field with "learning"
    await page.locator('#username').fill("learning");
});
