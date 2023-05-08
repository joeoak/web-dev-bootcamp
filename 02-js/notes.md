# JavaScript notes

## Section 14: Javascript basics

### 144. WTF is NaN

`NaN`: Not a number.

```js
0 / 0; // NaN
1 + NaN; // NaN

typeof NaN; // "number"
```

### 147. Updating variables

```js
count = count + 1;
count += 1;
count++;
```

## Section 15: JavaScript strings and more

### 156. String template literals

```js
let concatenatedString = 'Total: ' + price * quantity;
let templateLiteral = `Total: ${price * quantity}`;
```

### 157. `undefined` and `null`

- `undefined` is a primitive value that is automatically assigned to newly declared variables.
- `null` is a primitive value that represents the intentional abscence of any value.

## Section 16: JavaScript decision making

### 162. Equality

In general, always use `===` or `!==` for equality or inequality.

### 169. Truthy and falsy values

- Falsy values
  - `false`
  - `0`
  - `""`
  - `null`
  - `undefined`
  - `NaN`
- Everything else is truthy

### 173. The switch statement

```js
const num = 1;
switch (num) {
  case 1:
    console.log('One');
    break; // stops switch from continuing on to subsequent cases
  case 2:
    console.log('Two');
    break;
  case 3:
    console.log('Three');
    break;
  default:
    console.log('Not one, two, or three');
}
```

## Section 17: JavaScript arrays

### 177. Push and pop

- `push()` and `pop()` borrow from the CS concept, stack.
- `shift()` and `unshift()` borrow from the CS concept, queue.

### 181. Reference types and equality testing

- When a new array is created, a reference to the array is stored in memory.
- When equality testing, JavaScript compares references, not values.

```js
1 === 1; // true
[1, 2, 3] === [1, 2, 3]; // false

let nums = [1, 2, 3];
let numsCopy = nums; // reference stored in variable
nums === numsCopy; // true
```

## Section 18: JavaScript object literals

### 187. Accessing data out of objects

```js
let car = {
  make: 'Honda',
  model: 'Accord',
};

car.make; // 'Honda'
car['make']; // 'Honda'
```

## Section 19: Repeating stuff with loops

### 191. Intro to for loops

```js
// syntax
for (initialization; condition; afterthought) statement;
```

### 196. Another loop: The while loop

- Use the while loop when there isn't a set number of iterations.

### 197. The break keyword

```js
while (true) {
  input = prompt('Enter input');
  if (input.toLowerCase() === 'quit') break; // exits while loop
}
```

### 199. The lovely for...of loop

```js
let colors = ['red', 'green', 'blue'];

// for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for...of loop
for (let color of colors) {
  console.log(color);
}
```

### 200. Iterating over objects

```js
const scores = {
  harry: 100,
  sally: 80,
};

for (let student in scores) {
  console.log(`${student} scored ${scores[student]}`); // 'harry scored 100', 'sally scored 80'
}

Object.keys(scores); // ['harry', 'sally']
Object.values(scores); // [100, 80]
Object.entries(scores); // [['harry', 100], ['sally', 80]]

// calculate average
let total = 0;
for (let score of Object.values(scores)) {
  total += score;
}
console.log(total / Object.values(scores).length);
```

## Section 20: Introducing functions

### 206. Arguments intro

- On definition: `function foo(parameter)`
- On call: `foo(argument)`

### 208. The return keyword

- `return`: Returns output of function and ends function.
- Functions can only return a single value.

## Section 21: Leveling up our functions

### 210. Function scope

- Where a variable is defined dicates where we can access that variable.
- Global variable vs. Local variable

### 211. Block scope

- A block refers to a group of statements within curly brackets.
- `let` and `const` are block scoped. `var` is not.

### 212. Lexical scope

```js
function init() {
  let name = 'Joe';
  function greet() {
    console.log(`Hi, ${name}`);
  }
  greet();
}
init();
```

### 213. Function expressions

```js
const add = function (x, y) {
  return x + y;
};

add(1, 1);
```

### 214. Higher order functions

```js
function callTwice(f) {
  for (let i; i < 2; i++) {
    f();
  }
}

function rollDie() {
  return Math.floor(Math.random * 6) + 1;
}

callTwice(rollDie()); // output of function passed as argument
callTwice(rollDie); // function itself passed as argument
```

### 215. Return functions

```js
function returnTestRangeFunction(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = returnTestRangeFunction(0, 18);

isChild(21); // false;
```

### 216. Defining methods

- Methods are functions added as properties of objects.

```js
const square = {
  area: function (side) {
    return side ** 2;
  },
  // syntactic sugar
  perimeter(side) {
    return side * 4;
  },
};
```

### 217. The mysterious keyword this

- `this` is typically used in a method.
- The value of `this` depends on the "invocation context" of the function it's used in.

```js
const dog = {
  name: 'Jimmy',
  bark() {
    console.log(`${this.name} barks!`);
  },
};

dog.bark(); // same as `window.dog.bark()`. `this` references `dog`

const foo = dog.bark;

foo(); // same as `window.foo()`. `this` references `window`
```

### 218. Using try/catch

```js
foo.toUpperCase(); // error (foo is not defined) stops script

try {
  foo.toUpperCase();
} catch (e) {
  // catches error and allows script to continue
  console.log(e);
}
```

## Section 22. Callbacks and array methods

### 224. Arrow functions implicit returns

```js
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1; // regular arrow function
}

const rollDie = () => (
  Math.floor(Math.random() * 6) + 1; // implicit return
)

const rollDie = () => Math.floor(Math.random() * 6) + 1; // implicit return without parentheses
```

### 226. setTimeout and setInterval

```js
const id = setInterval(() => {
  console.log(Math.random());
}, 1000);

clearInterval(id); // setInterval() returns an interval id which can be used in clearInterval()
```

### 227. The filter method

```js
const nums = [1, 2, 3, 4];

const evens = nums.filter((n) => {
  return n % 2 === 0; // callback returns true or false. if true, n is added to the new array
});
```

### 228. Some and every methods

```js
const nums = [1, 2, 3, 4];

nums.every((n) => n < 10); // true

nums.some((n) => n % 2 === 0); // true
```

### 229. The notorious reduce method

Executes a function on each element of an array, resulting in a single value

```js
const nums = [1, 2, 3, 4];

// reduce(accumulator, currentValue, initialValue)

// returns 10
nums.reduce((sum, num) => {
  return sum + num;
});

// returns 1. same as Math.min()
nums.reduce((min, num) => {
  if (num < min) return num;
  return min;
});
```

### 230. Arrow functions and this

- Arrow functions should not be used as methods because they don't have their own `this`.

## Section 23: Newer JavaScript features

### 232. Default params

```js
// without default params
function multiply(x, y) {
  y = typeof y !== 'undefined' ? y : 1;
  return x * y;
}

// with default params
function multiply(x, y = 1) {
  return x * y;
}
```

### 233. Spread in function calls

```js
const nums = [1, 2, 3, 4];

Math.min(1, 2, 3, 4); // 1
Math.min(nums); // NaN

// spread operator (...) spreads array out into separate arguments
Math.min(...nums); // 1
```

### 234. Spread with array literals

```js
const evens = [2, 4, 6];
const odds = [1, 3, 5];

// copy elements from an array into a new array
const nums = [...evens, ...odds, 7, 8, 9]; // [2, 4, 6, 1, 3, 5, 7, 8, 9]
```

### 235. Spread with objects

```js
const car1 = { make: 'Honda', model: 'Accord', color: 'Black' };

const car2 = { ...car, color: 'White' }; // last entry overrides existing key value pairs

const car3 = { ...['Honda', 'Accord'] }; // indices are used as keys: { 0: 'Honda', 1: 'Accord' }
```

### 236. Rest params

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

```js
function sum(...nums) {
  return nums.reduce((sum, num) => sum + num);
}

sum(1, 2, 3); // 6
```

### 237. Destructuring arrays

```js
const car = ['Honda', 'Accord'];

const [make, model] = car; // make = 'Honda', model = 'Accord'
```

### 237. Destructuring objects

```js
const car = {
  make: 'Honda',
  model: 'Accord',
};

const { make, model } = car; // make = 'Honda', model = 'Accord'

const { make: make2 } = car; // make2 = Honda
```

### 237. Destructuring params

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Black',
};

function getColor({ color }) {
  return `This car is ${color.toLowerCase()}`;
}

getColor(car); // 'This car is black'
```
