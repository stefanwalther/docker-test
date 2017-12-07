const Winston = require('winston');
require('winston-logstash');

module.exports = {
  development: [
    {
      transporter: Winston.transports.Console,
      options: {
        name: 'Console-Dev',
        level: 'trace',
        colorize: false,
        json: false,
        prettyPrint: false,
        handleExceptions: true,
        humanReadableUnhandledException: true
      }
    },
    {
      transporter: Winston.transports.Logstash,
      options: {
        name: 'logstash',
        node_name: 'my node name',
        port: 10514,
        host: '127.0.0.1',
        level: 'info',
        colorize: false,
        prettyPrint: false,
        handleExceptions: true
      }
    }
  ]
};
