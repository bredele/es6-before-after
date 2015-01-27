
# object lilterals

Object literals are enhanced to support shortand assignments, properties accessors (getter and setter) and methods declaration:

```js
var greet = {
	name: 'olivier',
  get hello() {
    return 'hello ' + this.name;
  },
  world() {
    return 'hello world!';
  }
};
```

<!--   > you also can use computed property names (see [symbol]()) -->

There is also more contreversial such as making super calls or setting the prototype at construction: 

```js
function handler() {
	// do something
}
var greet = {
  __proto__ : otherObj,
  handler,
  toString() {
    return 'toString: ' + super.toString();
  }
};
```


