# Modules notes

## 329. Working with `module.exports`

```js
// math.js

const add = (x, y) => x + y;
const square = (x) => x * x;

module.exports = {
  add: add,
  square: square,
};
```

```js
// app.js

const math = require(`./math`);

math.add(1, 1); // 2
math.square(2); // 4
```

## 330. Requiring a directory

- When a directory is passed into `require()` as an argument, Node.js will look for an entry points via:
  1. `package.json`
  2. `index.js`
  3. `index.node`

## 331. Introducing NPM

1. A library of packages
2. A CLI tool to install and manage packages

## 334. The all-important `package.json`

- Contains metadata about a project
- Acts as a record of dependencies

```shell
npm init # create package.json
```

## 335. Installing all dependencies for a project

```shell
npm install # install all dependencies
```
