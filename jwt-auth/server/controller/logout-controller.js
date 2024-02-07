const User = require('../model/user')

const logoutController = async(req,res) => {
  const cookies = req.cookies;

  console.log(cookies);

  if(!cookies?.jwt){
    return res.status(204);
  }

  const refreshToken = cookies.jwt;
  console.log(refreshToken);

  const foundUser = await User.findOne({refreshToken});
  
  if(!foundUser){
    res.clearCookie('jwt', {httpOnly: true})
    return res.status(204).json({"message":"Logged Out"});
  }

  await User.findByIdAndUpdate(foundUser._id,{$set: {refreshToken: null}});

  res.clearCookie('jwt', {httpOnly: true})
    return res.status(204).json({"message":"Logged Out"});
}

module.exports = {logoutController}