const express = require('express');
const router = express.Router();
const { verifyJwt } = require('../middleware/verify-jwt')
const {getUserDetailsController, postUserDetailsController}  = require('../controller/protected-route-controller')
router.get('/secure-route',verifyJwt ,getUserDetailsController);
router.post('/secure-route-two', verifyJwt ,postUserDetailsController)


module.exports = router;
