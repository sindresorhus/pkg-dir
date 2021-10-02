import {expectType} from 'tsd';
import {pkgDir, pkgDirSync} from './index.js';

expectType<Promise<string>>(pkgDir('/Users/project/pkg-dir'));
expectType<string>(pkgDirSync('/Users/project/pkg-dir'));
