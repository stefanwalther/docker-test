class DefaultController {

  static get(req, res) {
    console.log('We are here');
    if (req.query.output === 'text') {
      res.send('Hello World').end();
    } else {

      res.json({text: 'Hello World'}).end();
    }
  }
}

module.exports = DefaultController;
