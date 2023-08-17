import {Page, test} from '@playwright/test';

// Annotate entire file as serial.
//You can annotate inter-dependent tests as serial. If one of the serial tests fails, all subsequent tests are skipped. All tests in a group are retried together.
test.describe.configure({mode: 'serial'});

let page: Page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
});

test.afterAll(async () => {
    await page.close();
});

test('runs first', async () => {
    await page.goto('https://playwright.dev/');
});

test('runs second', async () => {
    await page.click('text=Get Started');
});
