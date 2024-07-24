# 0x06. Unittests in JS

## Project Overview
This project involves writing unit tests in JavaScript using Mocha, Chai, and Sinon. The tasks are designed to teach you how to write comprehensive test suites, use assertion libraries, manage test cases, and perform integration tests.

## Learning Objectives
- Write a test suite using Mocha.
- Use Node or Chai assertion libraries.
- Manage long test suites effectively.
- Implement and use spies and stubs.
- Utilize hooks for test setup and teardown.
- Write unit tests for async functions.
- Perform integration testing with a small Node server.

## Requirements
- Code executed on Ubuntu 18.04 using Node 12.x.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- Include a `README.md` file at the root of the project folder.
- Use `.js` file extension for your code.
- Tests should pass without any warnings or errors when running `npm run test *.test.js`.

## Setup Instructions
1. **Install Mocha, Chai, and Sinon**
    ```sh
    npm install mocha chai sinon
    ```

2. **Project Directory Structure**
    ```
    0x06-unittests_in_js/
    ├── 0-calcul.js
    ├── 0-calcul.test.js
    ├── 1-calcul.js
    ├── 1-calcul.test.js
    ├── 2-calcul_chai.js
    ├── 2-calcul_chai.test.js
    ├── 3-payment.js
    ├── 3-payment.test.js
    ├── 4-payment.js
    ├── 4-payment.test.js
    ├── 5-payment.js
    ├── 5-payment.test.js
    ├── 6-payment_token.js
    ├── 6-payment_token.test.js
    ├── 7-skip.test.js
    ├── 8-api/
    │   ├── package.json
    │   ├── api.js
    │   ├── api.test.js
    ├── 9-api/
    │   ├── package.json
    │   ├── api.js
    │   ├── api.test.js
    └── 10-api/
        ├── package.json
        ├── api.js
        ├── api.test.js
    ```

## Task Instructions

### Task 0: Basic test with Mocha and Node assertion library
- **Install Mocha using npm:**
    ```sh
    npm install mocha
    ```
- **Setup script in `package.json` to run tests:**
    ```json
    {
      "scripts": {
        "test": "mocha"
      }
    }
    ```
- **Create `0-calcul.js`:**
    ```javascript
    function calculateNumber(a, b) {
      return Math.round(a) + Math.round(b);
    }
    module.exports = calculateNumber;
    ```

- **Create `0-calcul.test.js`:**
    ```javascript
    const assert = require('assert');
    const calculateNumber = require('./0-calcul');

    describe('calculateNumber', () => {
      it('should return 4 for (1, 3)', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
      });
      it('should return 5 for (1, 3.7)', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
      });
      it('should return 5 for (1.2, 3.7)', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
      });
      it('should return 6 for (1.5, 3.7)', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
      });
    });
    ```

- **Run test:**
    ```sh
    npm test 0-calcul.test.js
    ```

### Task 1: Combining descriptions
- **Create `1-calcul.js`:**
    ```javascript
    function calculateNumber(type, a, b) {
      if (type === 'SUM') return Math.round(a) + Math.round(b);
      if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
      if (type === 'DIVIDE') {
        const roundedB = Math.round(b);
        if (roundedB === 0) return 'Error';
        return Math.round(a) / roundedB;
      }
    }
    module.exports = calculateNumber;
    ```

- **Create `1-calcul.test.js`:**
    ```javascript
    const assert = require('assert');
    const calculateNumber = require('./1-calcul');

    describe('calculateNumber', () => {
      it('should return 6 for SUM (1.4, 4.5)', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      });
      it('should return -4 for SUBTRACT (1.4, 4.5)', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      });
      it('should return 0.2 for DIVIDE (1.4, 4.5)', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      });
      it('should return Error for DIVIDE (1.4, 0)', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      });
    });
    ```

- **Run test:**
    ```sh
    npm test 1-calcul.test.js
    ```

### Task 2: Basic test using Chai assertion library
- **Install Chai:**
    ```sh
    npm install chai
    ```

- **Copy `1-calcul.js` to `2-calcul_chai.js`**

- **Create `2-calcul_chai.test.js`:**
    ```javascript
    const { expect } = require('chai');
    const calculateNumber = require('./2-calcul_chai');

    describe('calculateNumber', () => {
      it('should return 6 for SUM (1.4, 4.5)', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
      it('should return -4 for SUBTRACT (1.4, 4.5)', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
      it('should return 0.2 for DIVIDE (1.4, 4.5)', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
      it('should return Error for DIVIDE (1.4, 0)', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      });
    });
    ```

- **Run test:**
    ```sh
    npm test 2-calcul_chai.test.js
    ```

### Additional Tasks
- Follow the same structure to create and test files for each subsequent task (3 to 10).
- Ensure to restore spies and stubs in your tests.
- Make use of hooks (`beforeEach`, `afterEach`) for setup and teardown.

## Repository
- **GitHub repository:** alx-backend-javascript
- **Directory:** 0x06-unittests_in_js
- **Files:** All `.js` files required for each task.

## Conclusion
This project helps you grasp the fundamentals of unit testing in JavaScript using Mocha, Chai, and Sinon. By completing the tasks, you'll become proficient in writing effective test cases, handling async functions, and performing integration tests with a Node server.

