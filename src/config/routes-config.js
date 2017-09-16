const express = require('express');

// Load routes
const defaultRoutes = require('./../modules/default/default.controller');
const healthCheckRoutes = require('./../modules/health-check/health-check.routes');

function init(app) {


  app.use('/', defaultRoutes.get);
  // /health-check
  app.use('/', healthCheckRoutes);

}

module.exports = {
  init
};
