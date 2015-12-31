import path from 'path';
import test from 'ava';
import fn from './';

test('async', async t => {
	t.is(await fn(path.join(__dirname, 'fixture')), __dirname);
});

test('sync', t => {
	t.is(fn.sync(path.join(__dirname, 'fixture')), __dirname);
});
