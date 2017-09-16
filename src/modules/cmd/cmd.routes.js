const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const Controller = require('./cmd.controller');

router.get('/cmd/', Controller.get);

module.exports = router;
