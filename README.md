# Automated Tests using Cucumber and Playwright

## Description
This repository contains automated end-to-end tests for the http://www.automationpractice.pl/. The tests are written in Gherkin syntax using Cucumber for behavior-driven development and Playwright for browser automation.

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/test-repository.git
2. Install nodejs
3. Install cucumber lib for test purpose, and also install cucmber-html-reporter
    npm install -g cucumber-html-reporter
## How to execute locally
1. npm run test-with-report
the test report is located to .\reports\cucumber_report.html

## How to execute on CI
This project is set up to run tests automatically on GitHub Actions when changes are pushed to the main. The CI workflow is configured to install Node.js, install dependencies, and run the tests with a report.

