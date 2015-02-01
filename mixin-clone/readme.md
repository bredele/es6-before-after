# Object assign	

The new object `assign` method allows to copy the values of all enumerable own properties from one object to an other.


## clone

```js
var foo = {
	name: 'olivier'
};

var bar = Object.assign({}, foo);
foo.name = 'nicolas';

console.log(bar.name);
// => olivier
```

## mixin

```js
var foo = {
	name: 'olivier'
};

Object.assign(foo, {
	github: 'bredele'
});

console.log(foo.github);
// => bredele
```

It also works with multiple objects:


```js
var foo = {
	name: 'olivier'
};

Object.assign(foo, {
	github: 'bredele'
}, {
	city: 'calgary'
});

console.log(foo.city);
// => calgary
```