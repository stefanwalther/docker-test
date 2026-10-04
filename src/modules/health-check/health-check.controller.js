const pkg = require('../../../package.json');

class Controller {

  static get(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send({
      ts: new Date().toJSON(),
      version: pkg.version,
      name: pkg.name,
      repository: pkg.repository
    });
  }
}

module.exports = Controller;
