const express = require('express');

// Load routes
const defaultRoutes = require('./../modules/default/default.controller');
const healthCheckRoutes = require('./../modules/health-check/health-check.routes');

function init(app) {


  app.use('/', healthCheckRoutes);
  app.use('/', defaultRoutes.get);


}

module.exports = {
  init
};
