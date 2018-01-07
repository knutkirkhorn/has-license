# has-license
> Check if a repository has a license

Can check both local- and GitHub repositories. 

## Installation
```
$ npm install has-license
```

## Usage
```js
const hasLicense = require('has-license');

hasLicense('C:/Users/Knut/Documents/GitHub/btc-value-cli').then(result => {
    console.log(result);
    // => true
});

hasLicense('https://github.com/Knutakir/has-license').then(result => {
    console.log(result);
    // => true
});
```

## API
### hasLicense(path)
Returns true if the `path` has a license file in it. Otherwise it returns false.

If the `path` contains `github.com` it checks if the GitHub repository has a license.  

## Related
- [gh-repo-has-license](https://github.com/Knutakir/gh-repo-has-license) - Check if a GitHub repository has a license
- [default-branch](https://github.com/Knutakir/default-branch) - Get the default branch of a GitHub repository

## License
MIT © [Knut Kirkhorn](LICENSE)
