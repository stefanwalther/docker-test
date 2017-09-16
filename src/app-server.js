const express = require('express');
const routesConfig = require('./config/routes-config');
const logger = require('winster').instance();

class AppServer {

  constructor(config) {
    this.config = config || {};
    this.server = null;
    this.logger = logger;
    this._initApp();
  }

  _initApp() {
    this.app = express();
    routesConfig.init(this.app);
  }

  start() {
    return new Promise((resolve, reject) => {
      this.server = this.app.listen(this.config.PORT, err => {
        if (err) {
          this.logger.error('Cannot start express server', err);
          return reject(err);
        }
        this.logger.info('Express server listening on port %d', this.config.PORT);
        return resolve();
      });
    });
  }

  stop() {
    return new Promise(resolve => {
      this.server.close(() => {
        this.logger.info('Server stopped');
        resolve();
      });
    });
  }
}

module.exports = AppServer;
