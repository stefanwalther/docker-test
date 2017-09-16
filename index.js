const AppServer = require('./src/index.js');

const config = {
  PORT: process.env.PORT || 3004
};

let appServer = new AppServer(config);
appServer.start();



