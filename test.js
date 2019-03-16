import test from 'ava';
import m from '.';

test('returns true for this repo on GitHub', t => {
    const url = 'https://github.com/Knutakir/has-license';
    return m(url).then(result => {
        t.is(result, true);
    }).catch(() => {
        t.fail();
    });
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