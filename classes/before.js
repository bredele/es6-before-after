function Foo() {
  this.name = 'foo';
}

Foo.prototype.hello = function() {
  return 'hello ' + this.name + '!';
};