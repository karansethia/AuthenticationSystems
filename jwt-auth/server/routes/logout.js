const express = require('express');
const { logoutController } = require('../controller/logout-controller');

const router = express.Router();

router.post('/logout', logoutController);


module.exports = router;