'use strict';

var assert = require('assert');
var fs = require('fs');
var join = require('path').join;
var test = require('testit');

var transform = require('../');

var input = '<p><%this.user.name%></p>';
var options = {};
var locals = {
	user: {
		name:'John'
	}
};
var expected = '<p>John</p>';

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected);
}

test(transform.name + '.render()', function () {
  var output = transform.render(input, options, locals);
  assertEqual(output, expected);
});

test(transform.name + '.renderAsync()', function (done) {
	transform.renderAsync(input, options, locals).then(function (output) {
		assertEqual(output, expected);
		done();
	}, function (err) {
		done(err);
	});
});
