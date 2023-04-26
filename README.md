Email OTP Module
===
## Description
- Title:  `Email OTP Module application`
- Author:  `Thota Surendra Babu`

This is an Email OTP module, that can send the 6-digit to an email address OTP and can verify the OTP.

## Install & Dependence
- nodejs
- nodemailer (to send email)
- jest (test cases)

## Pre-requisites

- using `nodemailer` library to send email
- using gmail smtp as host
- Create an app password for your gmail account (https://security.google.com/settings/security/apppasswords)
- use your gmail and password you generated in `sendMailer.js`

## Use

### How to run the application?

  ```
  git clone
  npm install
  npm start
  ```
### How to run the Test Cases?
  ```
  npm run test
  ```

## Screens

### `Run the App`

![image](https://user-images.githubusercontent.com/1085817/234636040-4205a28a-36dc-4b8d-9061-4d9f706c07cc.png)

### `Check the OTP in sent mail box`

<img width="506" alt="image" src="https://user-images.githubusercontent.com/1085817/234636141-c5bd3f4a-5d9b-44bd-9a5a-82acae7af5b0.png">


### `Enter OTP for verification`

![image](https://user-images.githubusercontent.com/1085817/234636320-e934d86c-da00-423e-8778-cc8f8ae2a1b3.png)


### Test Report

![image](https://user-images.githubusercontent.com/1085817/234635667-5db40602-5377-4efd-bdb3-6a3b1870dcc0.png)


TBD

## Directory Hierarchy

```
|—— .gitignore
|—— README.rd
|—— index.js
|—— package-lock.json
|—— package.json
|—— src
|    |—— module
|        |—— otp.js
|    |—— sendMailer.js 
|    |—— utils
|        |—— emailValidation.js
|        |—— otpGenerator.js
|        |—— otpValidator.js
|—— tests
|    |—— otp.test.js
|    |—— emailValidation.test.js
|    |—— otpGenerator.test.js
|    |—— otpValidator.test.js
```
