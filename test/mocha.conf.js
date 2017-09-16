process.env.NODE_ENV = 'test';
if (process.env.CIRCLECI !== 'true') {
  // Something required on CircleCi
}
global.expect = require('chai').expect;
