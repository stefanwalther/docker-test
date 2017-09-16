class CmdController {

  static get(req, res) {
    if (req.query.output === 'text') {
      res.send('Hello World').end();
    } else {

      res.json({text: 'Hello World'}).end();
    }
  }
}

module.exports = CmdController;
