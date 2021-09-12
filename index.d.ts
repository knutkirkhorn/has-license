/**
Check if a repository has a license
@param path - Path to local repository or GitHub repository.
@returns Returns true if the `path` has a license file in it. Otherwise it returns false.
@example
```
import hasLicense from 'has-license';

hasLicense('C:/Users/Knut/Documents/GitHub/btc-value-cli').then(result => {
    console.log(result);
    // => true
});

hasLicense('https://github.com/knutkirkhorn/has-license').then(result => {
    console.log(result);
    // => true
});
```
*/
declare function hasLicense(path: string): Promise<boolean>;

export = hasLicense;
