import {expectType} from 'tsd';
import pkgDir = require('.');

expectType<Promise<string | undefined>>(pkgDir('/Users/project/pkg-dir'));
expectType<string | undefined>(pkgDir.sync('/Users/project/pkg-dir'));
