const {test, expect} = require('@playwright/test'); //module @playwright/test



test('Browser Context-Validating Error login', async ({page})=>
{   
      await page.goto("https://rahulshettyacademy.com/client/auth/login");
      await page.locator("#userEmail").fill("anshika@gmail.com");
      await page.locator("userPassword").type("Iamking@000");
      await page.locator("[value='Login'").click();
      //await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
      const titles= await page.locator(".card-body b").allTextContents();
      console.log(titles);
})


test('UI controls', async ({page}) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator('#username');
  const singIn = page.locator("#singInBtn");
  const documentLink = page.locator("[href*='documents-request']");
  const dropdown = page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okatBtn").click();
  console.log(await page.locator("radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

});

test.only('Child windows hadl', async ({browser}) =>
  { 
    //open operate window
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    
    
    documentLink.click();

  })