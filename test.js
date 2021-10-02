import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import tempy from 'tempy';
import {pkgDir, pkgDirSync} from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
	t.is(pkgDirSync(path.join(__dirname, 'fixture')), __dirname);
	t.is(pkgDirSync(t.context.disjoint), undefined);
});
