import {expectType} from 'tsd';
import hasLicense from './index.js';

expectType<Promise<boolean>>(hasLicense('https://github.com/knutkirkhorn/has-license'));
