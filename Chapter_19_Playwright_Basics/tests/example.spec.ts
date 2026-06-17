import {test, expect} from '@playwright/test'


//page - Inbuilt fixture is automaticallt given to you
//which are the function you can directly use in playwright

test('verify that the title will be TTI cart ', async ({page}) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(5000);
});




