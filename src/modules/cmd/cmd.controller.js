const { exec } = require('child_process');
const logger = require('winster').instance();

class CmdController {

  // curl -o -I -L -s -w "%{http_code}\n" http://localhost:3004/health-check
  static get(req, res, next) {

    let cmdToExec = req.query.def || 'ls -la';
    logger.trace('Command to execute', cmdToExec);

    exec(cmdToExec, (err, stdout, stderr) => {
      if (err) {
        res.json(err);
        next();
      }
      res.json({'result': stdout});
    })
  }
}

module.exports = CmdController;
