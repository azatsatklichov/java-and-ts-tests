// example.spec.ts
import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev-page';

test('Get Started table of contents', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    //await playwrightDev.getStarted();
    await expect(playwrightDev.tocList).toHaveText([
        'Installation',
        'First test',
        'Writing assertions',
        'Using test fixtures',
        'Using test hooks',
        'Learning the command line',
        'Creating a configuration file',
        'Release notes',
    ]);
});

test.skip('Core Concepts table of contents', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.coreConcepts();
    await expect(playwrightDev.tocList.first()).toHaveText('Browser');
});
