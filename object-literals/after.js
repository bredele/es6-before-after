/**
 * Simple object declaration.
 */

var foo = {
  name: 'foo',
  hello() {
    return 'hello ' + this.name;
  }
};


/**
 * Setter and getter.
 */

var foo = {
  name: 'foo',
  get world() {
    return 'hello ' + this.name;
  }
};

console.log(foo.world); // => hello foo