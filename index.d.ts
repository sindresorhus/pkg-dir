/**
Find the root directory of a Node.js project or npm package.

@param cwd - Directory to start from. Default: `process.cwd()`.
@returns The project root path or `undefined` if it couldn't be found.

@example
```
// /
// └── Users
//     └── sindresorhus
//         └── foo
//             ├── package.json
//             └── bar
//                 ├── baz
//                 └── example.js

// example.js
import pkgDir = require('pkg-dir');

(async () => {
	const rootDir = await pkgDir(__dirname);

	console.log(rootDir);
	//=> '/Users/sindresorhus/foo'
})();
```
*/
export function pkgDir(cwd: any): Promise<string>;

/**
Synchronously find the root directory of a Node.js project or npm package.

@param cwd - Directory to start from. Default: `process.cwd()`.
@returns The project root path or `undefined` if it couldn't be found.
*/
export function pkgDirSync(cwd: any): string;
