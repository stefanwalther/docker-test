const path = require('path');
const glob = require('glob');
const logger = require('winster').instance();

// Load routes based on the pattern './../modules/**/*.routes.js
function init(app) {

  let routes = glob.sync(path.join(__dirname, './../modules/**/*.routes.js'));
  routes.forEach(r => {
    logger.trace('Registering route', r);
    let route = require(r);
    app.use('/', route);
  });

}

module.exports = {
  init
};
