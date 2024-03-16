const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true 
  },
  password: {
    type: String,
    required: true 
  },
  profileDescription:{
    type: String,
  },
  position: {
    type:String,
  },
  refreshToken: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("User", userSchema);