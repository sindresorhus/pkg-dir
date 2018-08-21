/**
 * Creates a Promise for either the project root path or null if it couldn't be found.
 * 
 * @param cwd Directory to start from. Default: process.cwd()
 * @returns A Promise for either the project root path or null if it couldn't be found.
 */
export default function pkgDir(cwd?: string): Promise<string | null>;

/**
 * Gets the project root path or null if it couldn't be found.
 * 
 * @param cwd Directory to start from. Default: process.cwd()
 * @return The project root path or null if it couldn't be found.
 */
export function sync(cwd?: string): string | null;
