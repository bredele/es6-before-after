/**
 * Simple object declaration.
 */

var foo = {
  name: 'foo',
  hello: function() {
    return 'hello ' + this.name;
  }
};


/**
 * Setter and getter.
 */

var foo = {
  name: 'foo'
};

Object.defineProperty(foo, 'world', {
  get: function() {
    return 'hello ' + this.name;
  },
});

console.log(foo.world); // => hello foo