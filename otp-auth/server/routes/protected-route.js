const express = require('express');

const router = express.Router();

router.get('/secure-route',(req,res) => {
  console.log("in secure route");
  res.status(201).json({"message" : "Congratulations!! You can access this GET route "})
})
router.post('/secure-route-two',(req,res) => {
  res.status(201).json({"message" : "Congratulations!! You can access this POST route"})
})

module.exports = router