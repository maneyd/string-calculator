## String Calculator TDD Kata

## Technologies i have used : 
    - JavaScript
    - Jest (for testing)

## Setup & Run The program :
    git clone https://github.com/maneyd/string-calculator-tdd.git
    cd string-calculator-tdd

    -) install the dependencies 
        npm install -y
        npm install jest
    -) to test the test cases
        npm test

## Test cases are represented like this: 
    -) Test Case
    -) failed test with screenshot
    -) code to pass it
    -) passed test with screenshot

You can find this in the `screenshots/` folder and in the step-by-step TDD section below.

## TDD cycle : 

## Test 1: should return 0 for empty string
- ![Test Failed](/screenshots/1-Failed.png)
- ![Refactor Code](/screenshots/1-code.png)
- ![Test Passed](/screenshots/1-passed.png)

---

## Test 2: should return number when only one number is provided
- ![Test Failed](/screenshots/2-failed.png)
- ![Refactor Code](/screenshots/2-code.png)
- ![Test Passed](/screenshots/2-passed.png)

---

## Test 3: should return sum of numbers when only two numbers are provided
- ![Test Failed](/screenshots/3-failed.png)
- ![Refactor Code](/screenshots/3-code.png)
- ![Test Passed](/screenshots/3-passed.png)

---

## Test 4: should return sum of n numbers
- ![Refactor Code](/screenshots/4-code.png)
- ![Test Passed](/screenshots/4-passed.png)

---

## Test 5: should handle newlines between numbers
- ![Test Failed](/screenshots/5-failed.png)
- ![Refactor Code](/screenshots/5-code.png)
- ![Test Passed](/screenshots/5-passed.png)

---

## Test 6: should handle custom delimiter starting with //
- ![Test Failed](/screenshots/6-failed.png)
- ![Refactor Code](/screenshots/6-code.png)
- ![Test Passed](/screenshots/6-passed.png)

---

## Test 7: should throw an exception when negative numbers are present
- ![Test Failed](/screenshots/7-failed.png)
- ![Refactor Code](/screenshots/7-code.png)
- ![Test Passed](/screenshots/7-passed.png)

---

## Test 8: should ignore numbers greater than 1000
- ![Test Failed](/screenshots/8-failed.png)
- ![Refactor Code](/screenshots/8-code.png)
- ![Test Passed](/screenshots/8-passed.png)
