// emailValidation.js

function validateEmail(user_email) {

  /**
   * validating the email - with dso.org.sg domain name
   */

    const emailRegex = /^[\w-\.]+@([a-z\d-]+\.)*dso\.org\.sg$/i;
    return emailRegex.test(user_email);
  }
  
  module.exports = { validateEmail };
  