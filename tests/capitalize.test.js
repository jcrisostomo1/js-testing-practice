import capitalize from '../codes/capitalize.js';

test('christopher to be Christopher', () => {
  expect(capitalize('christopher')).toBe('Christopher');
});

test('CHRISTOPHER to be Christopher', () => {
  expect(capitalize('CHRISTOPHER')).toBe('Christopher');
});

test('cHrIsToPhEr to be Christopher', () => {
  expect(capitalize('cHrIsToPhEr')).toBe('Christopher');
});

test(" '' to be '' ", () =>{
  expect(capitalize('')).toBe('');
});

test(" 12 to be '' ", () =>{
  expect(capitalize(12)).toBe('');
});
