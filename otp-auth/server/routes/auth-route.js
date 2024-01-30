const express = require('express');
const { signinController, verifyController } = require('../controllers/auth-controller');

const router = express.Router();

router.post('/signin',signinController)
router.post('/verify',verifyController)

module.exports = router