const fs = require('fs');
const path = require('path');
const test = require('ava');
const tempy = require('tempy');
const pkgDir = require('.');

// Create a disjoint directory, used for the not-found tests
test.beforeEach(t => {
	t.context.disjoint = tempy.directory();
});

test.afterEach(t => {
	fs.rmdirSync(t.context.disjoint);
});

test('async', async t => {
	t.is(await pkgDir(path.join(__dirname, 'fixture')), __dirname);
	t.is(await pkgDir(t.context.disjoint), undefined);
});

test('sync', t => {
	t.is(pkgDir.sync(path.join(__dirname, 'fixture')), __dirname);
	t.is(pkgDir.sync(t.context.disjoint), undefined);
});
