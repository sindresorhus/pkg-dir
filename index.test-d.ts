import {expectType} from 'tsd-check';
import pkgDir from '.';

expectType<Promise<string | undefined>>(pkgDir('/Users/project/pkg-dir'));
expectType<string | undefined>(pkgDir.sync('/Users/project/pkg-dir'));
