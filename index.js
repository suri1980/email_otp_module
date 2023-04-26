const { Email_OTP_Module } = require('./src/module/otp');
const readline = require('readline');

// Replace with your test email address
const test_email = 'user1@dso.org.sg';

// Create an instance of the Email_OTP_Module class
const emailOTP = new Email_OTP_Module();

// Generate an OTP and send it to the test email address
emailOTP.generate_OTP_email(test_email)
  .then((status) => {
    console.log(`Status: ${status}`);
    if (status === 'STATUS_EMAIL_OK') {
      // Prompt the user to enter the OTP
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      console.log(`An OTP has been sent to ${test_email}. Please enter the OTP:`);

      rl.on('line', async (input) => {
        // Validate the entered OTP
        const result = await emailOTP.check_OTP({ email: test_email, readOTP: () => Promise.resolve(input) });
        console.log(`Status: ${result}`);

        if (result === 'STATUS_OTP_OK' || result === 'STATUS_OTP_FAIL') {
          rl.close();
        } else if (result === 'STATUS_OTP_TIMEOUT') {
          console.log('OTP verification timed out');
          rl.close();
        } else {
          console.log(`Invalid OTP entered. ${10 - result.split('_')[2]} tries remaining.`);
        }
      });
    }
  })
  .catch((error) => console.error(error));