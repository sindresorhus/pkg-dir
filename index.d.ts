declare const pkgDir: {
	/**
	 * Find the root directory of a Node.js project or npm package.
	 *
	 * @param cwd - Directory to start from. Default: `process.cwd()`.
	 * @returns A `Promise` for either the project root path or `undefined` if it couldn't be found.
	 */
	(cwd?: string): Promise<string | undefined>;

	/**
	 * Synchronously find the root directory of a Node.js project or npm package.
	 *
	 * @param cwd - Directory to start from. Default: `process.cwd()`.
	 * @returns The project root path or `undefined`.
	 */
	sync(cwd?: string): string | undefined;
};

export default pkgDir;
