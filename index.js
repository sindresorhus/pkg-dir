import {dirname} from 'node:path';
import {findUp, findUpSync} from 'find-up';

export async function pkgDir(cwd) {
	const filePath = await findUp('package.json', {cwd});
	return filePath && dirname(filePath);
}

export function pkgDirSync(cwd) {
	const filePath = findUpSync('package.json', {cwd});
	return filePath && dirname(filePath);
}
