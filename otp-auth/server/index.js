const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-route');
const protectedRoutes = require('./routes/protected-route');
const verifyOtp = require('./middleware/verifyOtp')
require('dotenv').config();
const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(verifyOtp)
app.use(protectedRoutes);
const startServer = async(uri) => {
  await mongoose.connect(uri);
  app.listen(3100);
}

startServer(process.env.MONGO_URI)