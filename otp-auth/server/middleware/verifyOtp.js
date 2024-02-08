const { authenticator } = require("otplib");
require('dotenv').config();
const User = require('../model/user')


// todo change the accessOTP to authHeader
const verifyOtp = async(req,res,next) => {
// verify the accessOTP from client
// const { accessOtp } = req.body;
if(!accessOtp){
  return res.status(402);
}
const isValid = authenticator.check(accessOtp, process.env.ACCESS_OTP_SECRET);
if(!isValid){
  return res.status(403);
}

  const foundUser = await User.findOne({accessOtp});
  if(!foundUser) return res.status(403)
  req.name = foundUser.name;
  next();

}

module.exports = verifyOtp;