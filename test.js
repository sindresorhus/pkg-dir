'use strict';
var path = require('path');
var test = require('ava');
var fn = require('./');

test('async', function (t) {
	return fn(path.join(__dirname, 'fixture')).then(function (fp) {
		t.is(fp, __dirname);
	});
});

test('sync', function (t) {
	var fp = fn.sync(path.join(__dirname, 'fixture'));
	t.is(fp, __dirname);
	t.end();
});
