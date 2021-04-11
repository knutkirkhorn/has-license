import {expectType} from 'tsd';
import hasLicense = require('.');

expectType<Promise<boolean>>(hasLicense('https://github.com/Knutakir/has-license'));
