import path from 'path';
import test from 'ava';
import pkgDir from '.';

test('async', async t => {
	t.is(await pkgDir(path.join(__dirname, 'fixture')), __dirname);
});

test('sync', t => {
	t.is(pkgDir.sync(path.join(__dirname, 'fixture')), __dirname);
});
