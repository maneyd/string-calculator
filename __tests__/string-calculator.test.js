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