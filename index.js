import {access} from 'node:fs/promises';
import ghRepoHasLicense from 'gh-repo-has-license';

export default async function hasLicense(path) {
	if (path.startsWith('https://github.com/') || path.startsWith('http://github.com/')) {
		if (path.startsWith('http://github.com/')) {
			// Force https connection
			// eslint-disable-next-line no-param-reassign
			path = `${path.slice(0, 4)}s${path.slice(4)}`;
		}

		// Check if the license file exists at the GitHub repository
		return ghRepoHasLicense(path);
	}

	try {
		// Check if the license file exists with `fs.access()`
		await access(`${path}/license`);
		return true;
	} catch {
		return false;
	}
}
