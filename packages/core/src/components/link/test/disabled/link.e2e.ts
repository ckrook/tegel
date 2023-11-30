import { test } from 'stencil-playwright';
import { expect } from '@playwright/test';

const componentTestPath = 'src/components/link/test/default/index.html';

test.describe('tds-link-disabled', () => {
  test('disabled link is rendered correctly', async ({ page }) => {
    await page.goto(componentTestPath);

    /* Check if a component exists in the DOM */
    const linkComponent = page.getByTestId('tds-link-testid');
    await expect(linkComponent).toHaveCount(1);

    /* Take screenshot */
    await expect(page).toHaveScreenshot({ maxDiffPixels: 0 });
  });

  test('find link and see if its available', async ({ page }) => {
    await page.goto(componentTestPath);
    const link = page.getByRole('link', { name: 'Tegel' });
    await expect(link).toHaveCount(1);
    await expect(link).toBeVisible();
    const myEventSpy = page.spyOnEvent('click');
    await link.click();
    expect(myEventSpy).not.toHaveReceivedEvent();
  });
});
