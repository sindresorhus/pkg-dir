/**
 * Returns a Promise for either the project root path or null if it couldn't be found.
 * @param cwd Directory to start from. Default: process.cwd()
 */
declare function pkgDir(cwd?: string): Promise<string | null>

/**
 * Returns the project root path or null if it couldn't be found.
 * @param cwd Directory to start from. Default: process.cwd()
 */
export function sync(cwd?: string): string | null

export default pkgDir
