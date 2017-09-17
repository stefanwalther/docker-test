const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const Controller = require('./cmd-cron.controller');

router.get('/cmd-cron', Controller.get);

module.exports = router;
