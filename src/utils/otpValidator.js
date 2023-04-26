/**
 * 
 * @param {int} otp 
 * @returns bool true/false after validating the OTP
 */
function validateOTP(otp) {
    const digitsRegex = /^[0-9]{6}$/;
    return digitsRegex.test(otp);
  }
  
  module.exports = { validateOTP };
  