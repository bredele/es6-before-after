# classes

ES6 classes are a simple sugar over the *prototype*-based OO pattern.


```js
class User {

	constructor(name = 'John Doe') {
	  this.name = name;
  }

  hello() {
    return 'hello ' + this.name;
  }
}
```

This new syntax makes class prototype patterns easier to use and supports super calls, getter and setter, static methods, constructors, etc.
