# Type Validation Library for TypeScript

![npm](https://img.shields.io/npm/v/type-validation)
![npm bundle size](https://img.shields.io/bundlephobia/min/type-validation)
![GitHub issues](https://img.shields.io/github/issues/yourusername/type-validation)
![GitHub license](https://img.shields.io/github/license/yourusername/type-validation)

A simple and lightweight library for validating data types in TypeScript.

## Installation

You can install the package via npm:

```bash
npm install type-validation
```


## Usage
Import the desired validation functions from the package and use them in your TypeScript code:

```typescript

import { isNumber, isString } from 'type-validation';

console.log(isNumber(42)); // true
console.log(isNumber('42')); // false

console.log(isString('Hello')); // true
console.log(isString(123)); // false

```



## API
`isNumber(value: any): value is number`
Returns true if the value is a number, otherwise false.

`isString(value: any): value is string`
Returns true if the value is a string, otherwise false.



## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or additional features you'd like to see.



