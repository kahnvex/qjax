'use strict';

require('./domify-node');
require('should');

var qjax = require('../src/index.js');
var request = require('request');


describe('http', function() {
  var promise;
  var httpOptions;
  var qRequest = qjax.requestAdapter(request);

  beforeEach(function() {
    httpOptions = {
      url: 'http://google.com',
      method: 'GET'
    };

    qjax.setHttp(qRequest);
  });

  it('returns a response with the request is complete', function(done) {
    qjax.http(httpOptions)
    .then(function(response) {
      response[0].statusCode.should.be.exactly(200);
      done();
    });
  });
});
