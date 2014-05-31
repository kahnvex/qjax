var q = require('q');

var requestAdapter = function(request) {
  return function(options) {
    return q.denodeify(request)(options);
  };
};

module.exports = requestAdapter;
