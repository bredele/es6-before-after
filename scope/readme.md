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