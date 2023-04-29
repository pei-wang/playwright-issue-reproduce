const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  // Navigate to the web page
  await page.goto('https://example.com');

  // Assert that the page title is correct
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Example Domain');
});

