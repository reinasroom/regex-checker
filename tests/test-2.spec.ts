import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: '検証する' }).click();
  await expect(page.getByText('正規表現または検証文字列を入力してください')).toBeVisible();
});