var $ = require('jquery');
var q = require('q');

var jqueryAjaxAdapter = function() {
  return function(options) {
    return q($.ajax(options));
  };
};

module.exports = jqueryAjaxAdapter;
