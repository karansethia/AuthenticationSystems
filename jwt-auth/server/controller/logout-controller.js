const User = require('../model/user')

const logoutController = async(req,res) => {
  const cookies = req.cookies;

  if(!cookies?.jwt){
    return res.status(204);
  }

  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({refreshToken});
  
  if(!foundUser){
    res.clearCookie('jwt', {httpOnly: true})
    return res.status(204);
  }

  await User.findByIdAndUpdate(foundUser._id,{$set: {refreshToken: null}});

  res.clearCookie('jwt', {httpOnly: true})
    return res.status(204);
}

module.exports = {logoutController}