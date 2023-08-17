import {chromium, test, expect, Page} from '@playwright/test';


//https://playwright.dev/docs/debug

test.describe('iFrame Test Suite', () => {

    test('basic test', async ({page}) => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });

    //You can focus some tests. When there are focused tests, only these tests run.
    test.only('Click on button "Options"', async() => {
        //const browser = await chromium.launch({ headless: false, slowMo: 300});
        const browser = await chromium.launch({ headless: false, slowMo: 300, devtools: true});
        const page = await browser.newPage();
        await page.goto('https://demoqa.com/frames');
        await page.pause();

        const frame1 = await page.frame({url: /\/sample/});
        const heading1 = await frame1.$('h1');
        console.log(await heading1.innerText());

        await browser.close();
    })
})
