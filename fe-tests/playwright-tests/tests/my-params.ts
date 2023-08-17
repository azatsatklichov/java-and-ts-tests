// my-test.ts
import { test as base } from '@playwright/test';


//old -way
// const people = ['Alice', 'Bob'];
// for (const name of people) {
//     test(`testing with ${name}`, async () => {
//         // ...
//     });
//     // You can also do it with test.describe() or with multiple tests as long the test name is unique.
// }

export type TestOptions = {
    person: string;
};

export const test = base.extend<TestOptions>({
    // Define an option and provide a default value.
    // We can later override it in the config.
    person: ['John', { option: true }],
});
