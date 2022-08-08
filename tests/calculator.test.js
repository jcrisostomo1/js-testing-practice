import Calculator from '../codes/Calculator.js';

let calc = new Calculator();

test('1 + 1 to be 2', () => {
  expect(calc.add(1,1)).toBe(2);
});

test('4 - 2 to be 2', () => {
  expect(calc.minus(4,2)).toBe(2);
});

test('2 * 2 to be 4', () => {
  expect(calc.multiply(2,2)).toBe(4);
});

test('4 / 2 to be 2', () => {
  expect(calc.divide(4,2)).toBe(2);
});

test('4 / 0 to be null', () => {
  expect(calc.divide(4,0)).toBe(null);
});