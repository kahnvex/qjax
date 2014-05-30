var $ = require('jquery');
var q = require('q');


var http = function(options) {
  return q($.ajax(options));
};

var exports = {};

exports.http = http;

exports.methodFactory = function(httpMethod) {
  var qjaxMethod = function(options) {
    options = options || {};
    options.type = httpMethod;
    return http(options);
  };

  return qjaxMethod;
};

module.exports = exports;
