const { validateOTP } = require('../src/utils/otpValidator');

test('Valid OTP consisting of 6 digits', () => {
  const otp = '123456';
  expect(validateOTP(otp)).toBe(true);
});

test('Invalid OTP consisting of less than 6 digits', () => {
  const otp = '12345';
  expect(validateOTP(otp)).toBe(false);
});

test('Invalid OTP consisting of more than 6 digits', () => {
  const otp = '1234567';
  expect(validateOTP(otp)).toBe(false);
});

test('Invalid OTP containing non-digit characters', () => {
  const otp = '12a456';
  expect(validateOTP(otp)).toBe(false);
});
