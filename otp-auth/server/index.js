const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const startServer = async(uri) => {
  await mongoose.connect(uri);
  app.listen(3100);
}

startServer(process.env.MONGO_URI)