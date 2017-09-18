const {exec} = require('child_process');
const logger = require('winster').instance();
const schedule = require('node-schedule');

class CmdController {

  static get(req, res) {

    let cron = req.query.cron || '* * * * *'; // Defaults to every minute
    let cmdToExec = req.query.def || 'echo This is the echo result of the cron job';

    logger.trace('Crating cron job:', cmdToExec, cron);
    schedule.scheduleJob(cron, () => {
      exec(cmdToExec, (err, stdout /* , stderr */) => {
        if (err) {
          return logger.trace('Error in cron job', err);
        }
        logger.trace('Result of cron job:', stdout);
      });
    });
    res.status(201);
    res.json({
      result: {
        cron: cron,
        cmd: cmdToExec
      }
    });
  }
}

module.exports = CmdController;
