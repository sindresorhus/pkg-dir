import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {temporaryDirectory} from 'tempy';
import {packageDirectory, packageDirectorySync} from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a disjoint directory, used for the not-found tests
test.beforeEach(t => {
	t.context.disjoint = temporaryDirectory();
});

test.afterEach(t => {
	fs.rmdirSync(t.context.disjoint);
});

test('async', async t => {
	t.is(await packageDirectory({cwd: path.join(__dirname, 'fixture')}), __dirname);
	t.is(await packageDirectory({cwd: t.context.disjoint}), undefined);
});

test('sync', t => {
	t.is(packageDirectorySync({cwd: path.join(__dirname, 'fixture')}), __dirname);
	t.is(packageDirectorySync({cwd: t.context.disjoint}), undefined);
});
