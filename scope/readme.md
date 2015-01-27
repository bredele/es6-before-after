# block scope

## `let`

When used inside a block, `let` limits the variable's scope to that block. Note the difference between `var` whose scope is inside the function where it is declared:


```js
var name = 'olivier';
var city = 'paris';

if(name === 'olivier') {
  let name = 'bredele';
  var city = 'calgary';

  console.log(name); // => bredele
  console.log(city); // => calgary
}

console.log(name); // => olivier
console.log(city); // => calgary
```

Here's an other example of let-scope variables in for-loop:

```js
var i = 0;
for(let i = i; i < 10; i++) {
  console.log(i);
}
console.log(i); // => 0
```

see [more examples](https://github.com/bredele/es6-before-after/blob/master/scope/after.js)

## `const`

`const` creates a read-only constant that can be global or local to the function in which it is declared (similar to `var` in terms of scope). It cannot be changed or re-declared. 

```js

const github = 'bredele';

// trying to change a const will fail
github = 'foo';

console.log("my github is: " + github);

// trying to redeclare a constant throws an error 
const github = 'bar';
```
