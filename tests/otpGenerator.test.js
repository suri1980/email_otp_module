const { generateOTP } = require('../src/utils/otpGenerator');

test('Generated OTP is a string with 6 characters', () => {
  const otp = generateOTP();
  expect(typeof otp).toBe('string');
  expect(otp.length).toBe(6);
});

test('Generated OTP contains only digits (0-9)', () => {
  const otp = generateOTP();
  const digitsRegex = /^[0-9]{6}$/;
  expect(digitsRegex.test(otp)).toBe(true);
});
