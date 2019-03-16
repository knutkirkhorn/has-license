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

test('returns true for this repo locally', t => {
    const url = '.';
    return m(url).then(result => {
        t.is(result, true);
    }).catch(() => {
        t.fail();
    });
});