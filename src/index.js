'use strict';

var httpUtil = require('./http-util');
var requestAdapter = require('./request-adapter');
var jqueryAjaxAdapter = require('./jquery-ajax-adapter');

var qjax = {
  requestAdapter: requestAdapter,
  jqueryAjaxAdapter: jqueryAjaxAdapter
};

qjax.http = function(options) {
  return httpUtil.get()(options);
};

qjax.methodFactory = function(httpMethod) {
  var qjaxMethod = function(options) {
    options = options || {};
    options.type = httpMethod;
    return httpUtil.get()(options);
  };

  return qjaxMethod;
};

qjax.setHttp = function(httpLib) {
  httpUtil.set(httpLib);
};

module.exports = qjax;
