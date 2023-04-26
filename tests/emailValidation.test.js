const { validateEmail } = require('../src/utils/emailValidation');

test('Valid email address in the format user@dso.org.sg', () => {
  const email = 'testuser@dso.org.sg';
  expect(validateEmail(email)).toBe(true);
});

test('Valid email address in the format user@proc.dso.org.sg', () => {
  const email = 'testuser@proc.dso.org.sg';
  expect(validateEmail(email)).toBe(true);
});

test('Invalid email address in the format user@yahoo.com', () => {
  const email = 'testuser@yahoo.com';
  expect(validateEmail(email)).toBe(false);
});

test('Invalid email address in the format user@a.dso.org.sg.yahoo.com', () => {
  const email = 'testuser@a.dso.org.sg.yahoo.com';
  expect(validateEmail(email)).toBe(false);
});

test('Invalid email address in the format user@dso.org.sg.yahoo.com', () => {
  const email = 'testuser@dso.org.sg.yahoo.com';
  expect(validateEmail(email)).toBe(false);
});
