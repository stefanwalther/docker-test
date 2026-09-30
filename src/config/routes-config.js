const fs = require('fs');
const path = require('path');
const logger = require('winster').instance();

// Collect *.routes.js files recursively, sorted like glob.sync would return them.
function findRouteFiles(dir) {
  let found = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found = found.concat(findRouteFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.routes.js')) {
      found.push(full);
    }
  }
  return found.sort();
}

// Load routes based on the pattern './../modules/**/*.routes.js
function init(app) {

  let routes = findRouteFiles(path.join(__dirname, './../modules'));
  routes.forEach(r => {
    logger.trace('Registering route', r);
    let route = require(r);
    app.use('/', route);
  });

}

module.exports = {
  init
};
