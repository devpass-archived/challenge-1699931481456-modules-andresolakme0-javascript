const { add, subtract } = require('./mathUtils');

test('Addition', () => {
  expect(add(5, 3)).toBe(8);
});

test('Subtraction', () => {
  expect(subtract(10, 4)).toBe(6);
});