import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('正規表現:').click();
  await page.getByLabel('正規表現:').fill('a');
  await page.getByLabel('検証文字列:').click();
  await page.getByLabel('検証文字列:').fill('aaaa');
  await page.getByRole('button', { name: '検証する' }).click();
  await expect(page.locator('body')).toContainText('aaaa');
  await expect(page.getByText('a', { exact: true })).toBeVisible();
});