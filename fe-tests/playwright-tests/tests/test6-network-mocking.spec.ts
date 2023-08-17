// example.spec.ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
    // Block any css requests for each test in this file.
    //Alternatively, you can use page.route(url, handler[, options]) to mock network in a single test.
    await context.route(/.css/, route => route.abort());
});

test('loads page without css', async ({ page }) => {
    await page.goto('https://playwright.dev');
    // ... test goes here
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');

    await page.pause();
});
