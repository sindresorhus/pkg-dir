import {expectType} from 'tsd-check';
import pkgDir from '.';

expectType<Promise<string | null>>(pkgDir('/Users/project/pkg-dir'));
expectType<string | null>(pkgDir.sync('/Users/project/pkg-dir'));
