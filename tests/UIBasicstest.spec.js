//first import require test
const {test, expect} = require('@playwright/test'); //module @playwright/test

//test case name, test function
test('First Playwright test', async ({browser, page})=>
{
//playwright code-
//step1 - open browser
//step2 - enter u/p 2seconds
//step3 - click 
    // chrome - plugins/ cookies
        //const context = await browser.newContext();
        //const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Browser Context Playwright test', async ({browser})=>
{
    //chrome - plugins/ cookies
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
});
 
test.only('Page Playwright test', async ({page})=>
{
      await page.goto("https://google.com");
      //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
      //
});