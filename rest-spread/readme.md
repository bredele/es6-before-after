# spread and rest

## rest

Here's how you can represent a number of arguments as an array with ES5

```js
function something(name) {
	var args = [].slice.call(arguments, 1);
	stuff.apply(null, args);
}
```

and ES6

```js
function something(name, ...args) {
	stuff.apply(null, args);
}
```

## spread

The spread operator allows an expression to be expanded in places where multiple arguments or elements are expected.

It is basically a better array literal (aka destructuring):

```js
var names = ['olivier', 'amy'];
var others = ['nicolas', ...names, 'anne'];
```

a more expressive apply

```js
function f(name, city, country) {}
var args = ['olivier', 'calgary', 'canada'];
f(...args);
```

and a better new (awesome for factories)

```js
function User(name, city, country) {}
var args = ['olivier', 'calgary', 'canada'];
var user = new User(...args);
```
