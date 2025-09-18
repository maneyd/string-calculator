const { add } =  require('../src/string-calculator');

test('should return 0 for empty string',() =>{
    expect(add("")).toBe(0);
});

test('should retunr number when only one number is provided',() =>{
    expect(add("2")).toBe(2);
});

test('should retunr sum of numbers when only two numbers are provided',() =>{
    expect(add("2,4")).toBe(6);
});

test('should retunr sum of n numbers',() =>{
    expect(add("2,4,7,2,13,52,52")).toBe(132);
});

test('should handle newlines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should handle custom delimiter starting with //', () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n4|5|6")).toBe(15);
});

test('should throw an exception when negative numbers are present', () => {
  expect(() => add("1,-2,3,-5")).toThrow("negative numbers not allowed: -2, -5");
  expect(() => add("1,-2,3")).toThrow("negatives are not allowed");
});

test('should ignore numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
});