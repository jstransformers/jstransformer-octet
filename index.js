'use strict';

var octet = require('octet');
var merge = require('merge');

exports.name = 'octet';
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var result = octet(str, merge(options, locals));
  if (result.err) {
    throw new Error(result.err);
  }
  else {
    return result.res;
  }
};
