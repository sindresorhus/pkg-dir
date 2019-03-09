declare const pkgDir: {
	/**
	 * Find the root directory of a Node.js project or npm package.
	 *
	 * @param cwd - Directory to start from. Default: `process.cwd()`.
	 * @returns A `Promise` for either the project root path or `null` if it couldn't be found.
	 */
	(cwd?: string): Promise<string | null>;

	/**
	 * Synchronously find the root directory of a Node.js project or npm package.
	 *
	 * @param cwd - Directory to start from. Default: `process.cwd()`.
	 * @returns The project root path or `null`.
	 */
	sync(cwd?: string): string | null;
};

export default pkgDir;
