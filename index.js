'use strict';

var octet = require('octet');
var extend = require('extend-shallow');

exports.name = 'octet';
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  return octet(str, extend({}, options, locals));
};
