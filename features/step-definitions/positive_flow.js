const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Given('I am on the homepage', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('http://www.automationpractice.pl/');
});

When('I sign in with valid credentials', async () => {
  await page.click('text=Sign in');
  await page.waitForSelector('#email');
  await page.fill('#email', 'limeiling777@gmail.com');
  await page.fill('#passwd', 'abcdefg*');
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    page.click('#SubmitLogin') // Click on the submit button
  ]);
});

Then('I should be logged in successfully', async () => {
  const accountInfo = await page.textContent('.account');
  const { expect } = await import('chai');
  expect(accountInfo).to.include('Meiling LI');
});

Given('I am logged in', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();

  await page.goto('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

  // Fill in the login form
  await page.fill('#email', 'limeiling777@gmail.com');
  await page.fill('#passwd', 'abcdefg*');

  // Click on the login button
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    page.click('#SubmitLogin')
  ]);

});

When('I add a product to the cart', { timeout: 30000 }, async () => {
  await page.goto('http://www.automationpractice.pl/index.php?id_product=2&controller=product#/11-color-black/2-size-m');
  console.log('Navigated to product page');
  await page.click('#add_to_cart');
  console.log('Clicked Add to Cart button');
});

When('I proceed to checkout', async () => {
  await page.click('text=Proceed to checkout');
});

Then('I should see the checkout page', async () => {
  const checkoutTitle = await page.textContent('#cart_title');
  const { expect } = await import('chai');
  expect(checkoutTitle).to.include('Shopping-cart summary');
});

When('I sign in with invalid credentials', async () => {
  // Make sure the page object is properly initialized before interacting with it
  if (!page) {
    throw new Error('Page is not initialized. Make sure "Given I am on the homepage" step is executed first.');
  }

  await page.click('text=Sign in');
  // Fill in invalid credentials
  await page.fill('#email', 'invalid_email@example.com');
  await page.fill('#passwd', 'invalid_password');
  await page.click('#SubmitLogin');
});

Then('I should see an error message', async () => {
  // Verify that an error message is displayed
  await page.waitForSelector('.alert.alert-danger');
});
