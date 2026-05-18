// @ts-check

// require('dotenv').config({
//   path: './.env'
// });
require('dotenv').config();
import { defineConfig, devices } from '@playwright/test';

//require('dotenv').config()

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
// this is for test case runing
 // globalTimeout: 60*60*1000,
  timeout: 60000,

  expect:{
    // this is for expect statements ( assertion )
    timeout: 20000,
  },

  // testDir looks to run test case present in the given folder (./tests )
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true, // run paralele or false sequenscial

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0, // 2:2 retries test case
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[['html'],['list'],['json', { outputFile: 'results.json' }]], //dot, list,[['list]], [['html]]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    headless: false,
    slowMo: 1000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    // 'trace': "off"
    'baseURL': ' https://opensource-demo.orangehrmlive.com',
    //'baseURL': 'https://www.flipkart.com',
    trace: 'on', // debuging the test
    video: 'on',
    screenshot: 'on',

   // testIdAttribute

    // // Context geolocation.
    // geolocation: { longitude: 12.492507, latitude: 41.889938 },

    // // Grants specified permissions to the browser context.
    // permissions: ['geolocation'],
    
  },

  

  /* Configure projects for major browsers */
  projects: [
    
    {
      name: 'chromium',
      use: { ...devices['Desktop chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome',

    //     viewport: {width: 375, height: 812}
    //    },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
     {
       name: 'Microsoft Edge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' },
     },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

