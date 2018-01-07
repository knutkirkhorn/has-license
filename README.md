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
```

## API
### hasLicense([path])
Returns true if the path has a license file in it. Otherwise it returns false.

## License
MIT © [Knut Kirkhorn](LICENSE)