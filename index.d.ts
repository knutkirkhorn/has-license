/**
Check if a repository has a license
@param path - Path to local repository or GitHub repository.
@returns Returns true if the `path` has a license file in it. Otherwise it returns false.
@example
```
import hasLicense from 'has-license';

console.log(await hasLicense('C:/Users/Knut/Documents/GitHub/btc-value-cli'));
// => true

console.log(await hasLicense('https://github.com/knutkirkhorn/has-license'));
// => true
```
*/
export default function hasLicense(path: string): Promise<boolean>;
