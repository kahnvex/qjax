require('./domify-node');

var should = require('should');
var http = require('../index.js').http;


describe('http', function() {
  var promise;

  beforeEach(function() {
    var httpOptions = {
      url: 'http://google.com',
      method: 'GET'
    };

    promise = http(httpOptions);
  });

  it('returns a promise', function() {
    promise.should.have.property('then');
    promise.should.have.property('done');
  });
});