import User from '../model/user'
const getUserDetailsController = async(req,res) => {
    const email = req.email;
    try{

    const foundUser = await User.findOne({email: email});
    if(!foundUser){
        return res.status(403).json({message: "User not found"});
    }
    return res.json(200).json({name: foundUser.name, email: foundUser.email, profileDescription: foundUser.profileDescription, postion: foundUser.position})
    }catch (e) {
        res.status(500).json({message: "Something went wrong"})
    }

}

const postUserDetailsController = async(req,res) => {
    const email = req.email;
    try{
        const foundUser = await User.findOne({email: email});
        if(!foundUser){
            return res.status(403).json({message: "User not found"});
        }
        const {position, profileDescription} = req.body;
        await User.findByIdAndUpdate(foundUser._id, {profileDescription: profileDescription, position: position});
        return res.status(201).json({message: "Profile Updated"});

    }catch (e) {
        res.status(500).json({message: "Something went wrong"})
    }
}

module.exports = {getUserDetailsController}