const User = require('../model/user');
const jwt = require('jsonwebtoken')

const registerController = async(req,res) => {

  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    return res.status(400);
  }

  const duplicate = await User.find({email: email});
  if(duplicate.length != 0){
    return res.status(409).json({"message": "Email already registered"});
  }

  try{

    const hashedPwd = await bcrypt.hash(password,10);
    const newUser = {name: name, email:email, password: hashedPwd}
    await User.create(newUser);
    return res.status(201).json({"message": "User created"})

  }catch(err){
    return res.status(500).json({"message": "An error occured"})
  }
  
  
}
const loginController = async(req,res) => {

  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400);
  }

  const foundUser = await User.findOne({email: email});
  if(!foundUser){
    return res.status(401).json({"message": "User doesnot exist"})
  }

  const match = bcrypt.compare(password, foundUser.password)

  if(match){
    const accessToken = jwt.sign(
      {"email":email},
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: "1h"}
    );
    const refreshToken = jwt.sign(
      {"email":email},
      process.env.REFRESH_TOKEN_SECRET,
      {expiresIn: "1h"}
    );
    await User.findByIdAndUpdate(foundUser._id,{refreshToken})
    res.cookie('jwt',refreshToken,{httpOnly: true});
    return res.status(201).json({accessToken})
  }else{
    return res.status(401).json({"message": "Password incorrect"})
  }

}

module.exports = {loginController, registerController}