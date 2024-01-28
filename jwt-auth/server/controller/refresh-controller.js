require('dotenv').config();
const User = require('../model/user');
const jwt = require('jsonwebtoken');

const refreshController = async(req,res) => {

  const cookies = req.cookies;

  if(!cookies?.jwt){
    return res.status(400);
  }

  const token = cookies.jwt;
  const foundUser = await User.findOne({refreshToken: token})
  if(!foundUser){
    return res.status(403)
  }  

  jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET,
    (err,decoded) => {
      if(err || decoded.email != foundUser.email) return res.status(403)
      const accessToken = jwt.sign(
          {"email" : decoded.email},
          process.env.ACCESS_TOKEN_SECRET,
          {expiresIn: '24h'}
        );
      return res.json({accessToken});
    }
  )

}

module.exports = { refreshController }