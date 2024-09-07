import { test, expect } from '@playwright/test';
import { faker} from '@faker-js/faker';

test('Registration Flow', async ({ page}) => {
    const password = faker.internet.password();

    //Navigate to the registration page
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
 
    //Enter form details
    await page.getByLabel('First name').fill(faker.person.firstName());
    await page.getByLabel('Last name').fill(faker.person.lastName());
    await page.getByLabel('E-Mail').fill(faker.internet.email());
    await page.getByLabel('Telephone').fill(faker.phone.number());
    await page.getByLabel('Password',{ exact:true}).fill(password);
    await page.getByLabel('Password confirm').fill(password);
    await page.locator('input[type="checkbox"]').check();
    await page.click('.btn.btn-primary');

    //Verify account creation message
    await expect(page.locator('div>h1')).toContainText('Your Account Has Been Created!')
});