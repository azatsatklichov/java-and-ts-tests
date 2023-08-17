// example.spec.ts
import { test, expect } from '@playwright/test';

// Run tests in this file with portrait-like viewport.
test.use({ viewport: { width: 600, height: 900 } });


//or same
test.describe('locale block', () => {
    // Run tests in this describe block with portrait-like viewport.
    test.use({ viewport: { width: 600, height: 900 } });

    test('my portrait test', async ({ page }) => {
        // ...
    });
});
