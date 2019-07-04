import test from 'ava';
import hasLisence from '.';

test('returns true for this repo on GitHub', async t => {
    const url = 'https://github.com/Knutakir/has-license';
    try {
        const result = await hasLisence(url);
        t.is(result, true);
    } catch (error) {
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