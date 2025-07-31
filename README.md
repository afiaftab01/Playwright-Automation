# Playwright Automation Framework

This is an end-to-end automation testing framework using **Playwright**, **Cucumber.js**, and **Allure** for robust and readable BDD-style test automation.

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Allure Reports](https://docs.qameta.io/allure/)
- [Chai](https://www.chaijs.com/)
- [Winston](https://github.com/winstonjs/winston) (for logging)
- Node.js v22 (recommended)

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js v22](https://nodejs.org/en/download) and npm must be installed.

---

### 📂 Project Setup

1. **Download and unzip** the `Playwright-Automation.zip`.
2. Open a terminal and **navigate to the project root**.
3. Run the following command to install dependencies:

   ```bash
   npm install

🧪 Running Tests
You can run tests by specifying:

✅ Environment (TEST_ENV)

✅ Browser (TEST_BROWSER)

✅ Cucumber tags (--tags)

🧾 Example command:

```bash
npm test --tags @checkout
```

You can use tags like @smoke, @checkout, etc., depending on your test cases. Update test parameters in package.json.

📊 Allure Reporting
Generate the report:
npm run report:generate
Open report:
npm run report:open

🧱 Project Structure
```
Playwright-Automation/
├── features/                   # Feature files written in Gherkin
├── step_definitions/           # Step definitions mapping Gherkin steps to Playwright actions
├── pages/                      # Page Object Models (POM)
├── core/                       # Support files like hooks, logger, environment setup
├── reports/                    # Allure HTML reports (generated)
├── allure-results/             # Allure raw results (auto-generated)
├── cucumber.js                 # Cucumber config file
├── package.json                # Project metadata and scripts
```

👨‍💻 How to Contribute

To add a new test or feature:
Create a .feature file inside the features/ folder.
Add step definitions in the step_definitions/ folder.
Add corresponding Page Object(s) in the pages/ folder.
Instantiate your page classes inside the World class (in core/).
Run and validate your test. Then generate and view the report.

📃 License
MIT – Feel free to use and modify this framework.

