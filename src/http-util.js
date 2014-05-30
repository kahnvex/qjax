var jqueryAjaxAdapter = require('./jquery-ajax-adapter');


var lib = jqueryAjaxAdapter();
var httpUtil = {};

httpUtil.set = function(httpLib) {
  lib = httpLib;
};

httpUtil.get = function() {
  return lib;
};

module.exports = httpUtil;
