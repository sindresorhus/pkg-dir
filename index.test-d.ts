import {expectType} from 'tsd';
import {packageDirectory, packageDirectorySync} from './index.js';

expectType<Promise<string | undefined>>(packageDirectory({cwd: '/Users/project/pkg-dir'}));
expectType<string | undefined>(packageDirectorySync({cwd: '/Users/project/pkg-dir'}));
