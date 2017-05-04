import path from 'path';
import test from 'ava';
import m from '.';

test('async', async t => {
	t.is(await m(path.join(__dirname, 'fixture')), __dirname);
});

test('sync', t => {
	t.is(m.sync(path.join(__dirname, 'fixture')), __dirname);
});
