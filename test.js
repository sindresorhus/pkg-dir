import fs from 'fs';
import path from 'path';
import test from 'ava';
import tempy from 'tempy';
import pkgDir from '.';

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
