process.env.NODE_ENV = 'test';
if (process.env.CIRCLECI !== 'true') {
  // something required on CircleCi
}
global.expect = require('chai').expect;
