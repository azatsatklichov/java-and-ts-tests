// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // Look for test files in the "tests" directory, relative to this configuration file
    testDir: 'tests',

    // Each test is given 30 seconds
    timeout: 30000,

    // Forbid test.only on CI
    forbidOnly: !!process.env.CI,

    // Two retries for each test
    retries: 2,

    // Limit the number of workers on CI, use default locally
    workers: process.env.CI ? 2 : undefined,

    use: {
        // Configure browser and context here
    },
    projects: [
        // "Pixel 4" tests use Chromium browser.
        {
            name: 'Pixel 4',
            use: {
                browserName: 'chromium',
                ...devices['Pixel 4'],
            },
        },

        // "iPhone 11" tests use WebKit browser.
        {
            name: 'iPhone 11',
            use: {
                browserName: 'webkit',
                ...devices['iPhone 11'],
            },
        },
    ],
};
export default config;
