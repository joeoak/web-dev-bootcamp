# Node.js notes

## 318. Introducing Node JS

- Node is an implementation of JavaScript that runs outside of the browser.

## 319. What is Node used for?

- What do people build with it?
  - Web servers, CLI tools, native apps, and more

## 321. The Node REPL

- Like the browser console
- No browser specific concepts (ie `document`, `window`, DOM API)

```shell
node # enter the Node.js REPL
```

- Global scope is `global`, not `window`. For example:

```js
// browser
window.console.log;

// Node.js
global.console.log;
```

## 322. Running Node files

```shell
node scripts.js
```

## 323. `process` and `argv`

```js
process; // object containing information about, and methods for, the current Node.js process
process.argv; // returns an array containing CLI arguments passed when the current process was launched

/*
[
    path of the executable that started the process,
    path of the file being executed,
    any additional CLI arguments
]
*/
```
