require('dotenv').config();
import { totp } from "otplib";
const User = require('../model/user')
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



const signinController = async(req,res) => {
  //recieve mobile number from request object
  const mobileNum = req.body;
  totp.options = {digits: 4}


  //generate otp
  const loginOtp = totp.generate(process.env.LOGIN_OTP_SECRET)
  //send otp to mobile number

  try{
    const sms = 
    await client.messages
      .create({
          body: `Hi, this is otp for login : ${loginOtp}`,
          from: '+19563050772',
          to: mobileNum
      });
      
    //on succesfull transfer of message send 201 response to client
    if(sms.status === 201){
      return res.status(201).json({"response": "Message sent"})
    }
  }
    catch(error){
      console.log(error);
      return res.status(500).json({"response": "An error occured"});
    }
   
}

const verifyController = async(req,res) => {
  //recieve OTP from client
  const { otp, name, mobileNum } = req.body;
  //verify OTP
  const isValid = totp.check(otp,process.env.LOGIN_OTP_SECRET);
  // add user to DB
  if(isValid){
    totp.options = { step: 86400 }
    try {
      const newAccessOtp= totp.generate(process.env.ACCESS_OTP_SECRET)
      const newUser = {name: name, mobile: mobileNum, accessOtp: newAccessOtp}
      await User.create(newUser);
      return res.status(201).json({newAccessOtp})
    } catch (error) {
      
    }
  }
  // send accessOTP with expiration time of 1 day => OTP that works like access Token
}

module.exports = {signinController, verifyController}