'use strict';

var octet = require('octet');
var extend = require('extend');

exports.name = 'octet';
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var result = octet(str, extend({}, options, locals));
  if (result.err) {
    throw new Error(result.err);
  }
  else {
    return result.res;
  }
};
