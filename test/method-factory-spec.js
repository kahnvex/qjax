'use strict';

require('./domify-node');
require('should');

var qjax = require('../src/index.js');

describe('methodFactory', function() {
  var method;
  var promise;

  beforeEach(function() {
    method = qjax.methodFactory('GET');
  });

  it('returns a function', function() {
    method.should.be.a.Function;
  });

  it('makes requests', function(done) {
    qjax.http({url: 'http://google.com'})
    .then(function(response) {
      response[0].statusCode.should.be.exactly(200);
      done();
    });
  });
});
