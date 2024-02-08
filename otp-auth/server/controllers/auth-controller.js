require('dotenv').config();
const { authenticator } = require("otplib");
const User = require('../model/user')
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



// signin controller is just to recieve mobile number and send otp to it
const signinController = async(req,res) => {
  //recieve mobile number from request object
  const {mobileNum} = req.body;
  authenticator.options = {digits: 4, step:60}


  //generate otp
  const loginOtp = authenticator.generate(process.env.LOGIN_OTP_SECRET)
  //send otp to mobile number
  console.log(loginOtp);

  try{
    // const sms = 
    await client.messages
      .create({
          body: `Hi, this is otp for login : ${loginOtp}`,
          from: '+19563050772',
          to: mobileNum
      });
      
    //on succesfull transfer of message send 201 response to client
    // if(sms.status === 201){
      return res.status(201).json({"response": "Message sent"})
    // }
  }
    catch(error){
      console.log(error);
      return res.status(500).json({"response": "An error occured"});
    }
   
}


// this controller actually recieves the user details from frontend, so store user in a state and then send it in second api request
const verifyController = async(req,res) => {
  //recieve OTP from client
  const { otp, name, mobileNum } = req.body;
  console.log("Recieved OTP: "+otp);
  
  //verify OTP
  const isValid = authenticator.verify({token: otp,secret: process.env.LOGIN_OTP_SECRET});
    console.log("The otp is: "+isValid);

  // add user to DB
  if(isValid){
    authenticator.options = { step: 86400, digits: 8 }
    try {
      const newAccessOtp= authenticator.generate(process.env.ACCESS_OTP_SECRET)
      const newUser = {name: name, mobile: mobileNum, accessOtp: newAccessOtp}
      // authenticator.resetOptions()
      await User.create(newUser);
      return res.status(201).json({newAccessOtp})
    } catch (error) {
      return res.status(403).json({"message": error.message})
    }
  }
  // send accessOTP with expiration time of 1 day => OTP that works like access Token
}

module.exports = {signinController, verifyController}