// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import hasLicense from './index.js';

test('returns true for this repo on GitHub', async t => {
	const url = 'https://github.com/knutkirkhorn/has-license';
	try {
		const result = await hasLicense(url);
		t.is(result, true);
	} catch {
		t.fail();
	}
});

/* TODO: this does not work on the CI:
test('returns true for this repo locally', t => {
    const path = __dirname;
    return m(path).then(result => {
        t.is(result, true);
    }).catch(() => {
        t.fail();
    });
});
*/
