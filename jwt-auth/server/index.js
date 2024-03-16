const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth')
const logoutRoutes = require('./routes/logout')
const refreshRoutes = require('./routes/refresh');
const protectedRoutes = require('./routes/protected-routes')
const {verifyJwt} = require('./middleware/verify-jwt');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config();


const app = express();

app.use(cors())

app.use(express.json());

app.use(cookieParser());

app.use(authRoutes);
app.use(refreshRoutes);
app.use(logoutRoutes);
// app.use(verifyJwt);
app.use(protectedRoutes);



const startServer = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("app running");
    app.listen(3000);
  } catch (error) {
  console.log(error);  
  }
}

startServer();