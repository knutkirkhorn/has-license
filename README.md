# has-license

> Check if a repository has a license

Can check both local- and GitHub repositories.

## Installation

```
npm install has-license
```

## Usage

```js
import hasLicense from 'has-license';

console.log(await hasLicense('C:/Users/Knut/Documents/GitHub/btc-value-cli'));
// => true

console.log(await hasLicense('https://github.com/knutkirkhorn/has-license'));
// => true
```

## API

### hasLicense(path)

Returns true if the `path` has a license file in it. Otherwise it returns false.

If the `path` contains `github.com` it checks if the GitHub repository has a license.  

## Related

- [has-license-cli](https://github.com/knutkirkhorn/has-license-cli) - CLI for this module
- [gh-repo-has-license](https://github.com/knutkirkhorn/gh-repo-has-license) - Check if a GitHub repository has a license
- [default-branch](https://github.com/knutkirkhorn/default-branch) - Get the default branch of a GitHub repository
