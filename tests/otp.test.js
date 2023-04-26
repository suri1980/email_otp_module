const { Email_OTP_Module } = require('../src/module/otp');
const { sendEmail } = require('../src/sendMailer');

describe('generate_OTP_email() function in emailOTP.js', () => {
  let emailOTP;

  beforeAll(() => {
    emailOTP = new Email_OTP_Module(sendEmail);
  });

  test('Valid email address to check email sending', async () => {
    const user_email = 'testuser@dso.org.sg';
    const status = await emailOTP.generate_OTP_email(user_email);
    expect(status).toBe('STATUS_EMAIL_OK');
  });

  test('Invalid email address to check email sending', async () => {
    const user_email = 'testuser@invalid.com';
    const status = await emailOTP.generate_OTP_email(user_email);
    expect(status).toBe('STATUS_EMAIL_INVALID');
  });

//   test('Valid email address and mock email sending to check email failure', async () => {
//     const user_email = 'testuser@dso.org.sg';
//     const sendEmail = jest.fn(() => {
//       throw new Error('Error sending email');
//     });
//     emailOTP = new Email_OTP_Module(sendEmail);
//     const status = await emailOTP.generate_OTP_email(user_email);
//     expect(status).toBe('STATUS_EMAIL_FAIL');
//   });
});
