import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();

  await page.getByRole('link', { name: 'Teams' }).click();
  await page.waitForURL('/teams');
  await expect(page.getByText('Teams Page')).toBeVisible();

  const teams = [
    {
      id: 1,
      name: '',
    },
    { id: 2, name: '' },
    {
      id: 3,
      name: '',
    },
  ];

  for (const team of teams) {
    await expect(page.getByRole('img', { name: team.name })).toBeVisible();
    await expect(page.getByRole('link', { name: team.name })).toBeVisible();
  }
});
