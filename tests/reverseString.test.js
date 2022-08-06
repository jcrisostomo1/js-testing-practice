import reverseString from '../codes/reverseString.js';

test(' "" to be "" ', () => {
  expect(reverseString('')).toBe('');
});

test(" 12 to be '' ", () =>{
  expect(reverseString(12)).toBe('');
});

test('hello to be olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('world to be dlrow', () => {
  expect(reverseString('world')).toBe('dlrow');
});

