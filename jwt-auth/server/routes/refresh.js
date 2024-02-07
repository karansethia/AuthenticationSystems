const express = require('express');
const { refreshController }  = require('../controller/refresh-controller')


const router = express.Router();

router.post('/refresh', refreshController);


module.exports = router;