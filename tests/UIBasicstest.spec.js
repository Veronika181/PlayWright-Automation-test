//first import require test
const {test} = require('@playwright/test'); //module @playwright/test

//test case name, test function
test('First Playwright test', async ({browser, page})=>
{
//playwright code-
//step1 - open browser
//step2 - enter u/p 2seconds
//step3 - click 
    // chrome - plugins/ cookies
        //const context = await broswer.newContext();
        //const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Browser Context Playwright test', async ({broswer})=>
{
    chrome - plugins/ cookies
      const context = await broswer.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});
 
test('Page Playwright test', async ({page})=>
{
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      //
});