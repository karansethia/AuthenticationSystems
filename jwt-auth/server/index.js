const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth')
const logoutRoutes = require('./routes/logout')
const refresh = require('./routes/refresh')
const {verifyJwt} = require('./middleware/verify-jwt')
require('dotenv').config();


const app = express();


const startServer = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("app running");
    app.listen(8080);
  } catch (error) {
  console.log(error);  
  }
}

startServer();