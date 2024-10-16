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

test.only('Browser Context Playwright test', async ({browser})=>
{   
    //chrome - plugins/ cookies
      const context = await browser.newContext();
      const page = await context.newPage();
      const userName = page.locator('#username');
      const signIn = page.locator('#signInBtn');
      const cardTitles = page.locator(".card-body a")
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      console.log(await page.title());
      await userName.fill("rahulshetty");
      await page.locator("[type='password']").fill("learning")
      await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    
    console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  
  console.log(allTitles);

});
 

test.only('Page Playwright test', async ({page})=>
{
      await page.goto("https://google.com");
      //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
      //
});

test('@Web Browser Context-Validating Error login', async ({browser})=>
    {
          const context = await browser.newContext();
          const page = await context.newPage();
          await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
          console.log(await page.title());
          //css         type, fill 
          await page.locator('#username').fill("learning");
    });