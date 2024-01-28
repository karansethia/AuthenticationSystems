const jwt = require('jsonwebtoken')

const verifyJwt = (req,res,next) => {
  const authHeader = req.headers['authorization'];
  if(!authHeader?.jwt) return res.status(403);

  const token = authHeader.split(' ')[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err,decoded) => {
      if(err) return res.status(403)
      req.email = decoded.email;
      next();
    }
  )
  
}

module.exports = {  verifyJwt }