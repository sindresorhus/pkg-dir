import {expectType} from 'tsd';
import {packageDirectory, packageDirectorySync} from './index.js';

expectType<Promise<string>>(packageDirectory({cwd: '/Users/project/pkg-dir'}));
expectType<string>(packageDirectorySync({cwd: '/Users/project/pkg-dir'}));
