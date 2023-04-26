const { validateEmail } = require('../utils/emailValidation');
const { sendEmail } = require('../sendMailer');
const { generateOTP } = require('../utils/otpGenerator');
const { validateOTP } = require('../utils/otpValidator');

class Email_OTP_Module {

  /**
   * start() & close are optional
   */

  async start() {
    // optional to implement
  }

  async close() {
    // optional to implement
  }

  async generate_OTP_email(user_email) {
    //Validating the email with domain name dso.org.sg
    const isValidEmail = validateEmail(user_email);

    if (!isValidEmail) {
      // Return Email Invalid status
      return 'STATUS_EMAIL_INVALID';
    }
    // Generating the OTP
    const otp = generateOTP();
    const emailBody = `Your OTP Code is ${otp}. The code is valid for 1 minute`;

    try {
      //Send email
      await sendEmail(user_email, emailBody);
      return 'STATUS_EMAIL_OK';
    } catch (error) {
      // If Error return with Email Fail status
      console.error(error);
      return 'STATUS_EMAIL_FAIL';
    }
  }

  async check_OTP(input) {
    const email = input.email;
    let isValidOTP = false;
    let tries = 0;
    let startTime = Date.now();
    let elapsedTime = 0;

    // OTP Validation and making sure the number of tries less than 10
    while (!isValidOTP && tries < 10) {
      const otp = await input.readOTP({ timeout: 10000 }); // wait for 10 seconds for input
      isValidOTP = validateOTP(otp);
      elapsedTime = Date.now() - startTime;

      if (elapsedTime >= 60000) { // check if the OTP has expired after 1 minute
        return 'STATUS_OTP_TIMEOUT';
      } else if (!isValidOTP && elapsedTime >= 10000) { // wait for 10 seconds before prompting for re-entry
        startTime = Date.now();
        tries++;
      }
    }

    if (isValidOTP) {
      return 'STATUS_OTP_OK';
    } else {
      return 'STATUS_OTP_FAIL';
    }
  }
}

module.exports = { Email_OTP_Module };