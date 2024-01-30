const signinController = async(req,res) => {
  //recieve mobile number from request object
  //send otp to mobile number
  //on succesfull transfer of message send 201 response to client
}

const verifyController = async(req,res) => {
  //recieve OTP from client
  //verify OTP
  // add user to DB
  // send accessOTP with expiration time of 1 day => OTP that works like access Token
}

module.exports = {signinController, verifyController}