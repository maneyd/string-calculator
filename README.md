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

## TDD Cycle :

### Test 1: should return 0 for empty string

**Test Failed**  
<img src="/screenshots/1-Failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/1-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/1-passed.png" width="400"/>

---

### Test 2: should return number when only one number is provided

**Test Failed**  
<img src="/screenshots/2-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/2-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/2-passed.png" width="400"/>

---

### Test 3: should return sum of numbers when only two numbers are provided

**Test Failed**  
<img src="/screenshots/3-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/3-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/3-passed.png" width="400"/>

---

### Test 4: should return sum of n numbers

**Test Failed**  
<img src="/screenshots/4-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/4-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/4-passed.png" width="400"/>

---

### Test 5: should handle newlines between numbers

**Test Failed**  
<img src="/screenshots/5-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/5-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/5-passed.png" width="400"/>

---

### Test 6: should handle custom delimiter starting with //

**Test Failed**  
<img src="/screenshots/6-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/6-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/6-passed.png" width="400"/>

---

### Test 7: should throw an exception when negative numbers are present

**Test Failed**  
<img src="/screenshots/7-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/7-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/7-passed.png" width="400"/>

---

### Test 8: should ignore numbers greater than 1000

**Test Failed**  
<img src="/screenshots/8-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/8-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/8-passed.png" width="400"/>

---

### Test 9: should handle delimiter of any length

**Test Failed**  
<img src="/screenshots/9-failed.png" width="400"/>

<br>

**Code to Pass**  
<img src="/screenshots/9-code.png" width="400"/>

<br>

**Test Passed**  
<img src="/screenshots/9-passed.png" width="400"/>
