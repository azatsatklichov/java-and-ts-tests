// example.spec.ts
import { test } from './my-params';
import { expect } from '@playwright/test';


test('test 1', async ({ page, person }) => {
    await page.goto(`/index.html`);
    await expect(page.locator('#node')).toContainText(person);
});
