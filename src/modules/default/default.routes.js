const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const DefaultController = require('./default.controller');

router.get('/', DefaultController.get);

module.exports = router;
