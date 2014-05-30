'use strict';

require('./domify-node');
require('should');

var methodFactory = require('../index.js').methodFactory;

describe('methodFactory', function() {
  var method;
  var promise;

  beforeEach(function() {
    method = methodFactory('GET');
    promise = method();
  });

  it('returns a function', function() {
    method.should.be.a.Function;
  });

  it('returns a function which returns a promise', function() {
    promise.should.have.property('then');
    promise.should.have.property('done');
  });
});
