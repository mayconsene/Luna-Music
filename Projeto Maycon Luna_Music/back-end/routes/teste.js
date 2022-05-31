const express = require('express');
const router = express.Router();
const controller = require('../controllers/teste');

router.get('/', controller().teste);

module.exports = router;