// mixin
function mixin(to, from) {
  for (var key in from) {
    if (from.hasOwnProperty(key)) {
      // copy properties
      to[key] = from[key];
    }
  }
  return to;
}


// clone
function clone(obj){
  var copy = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = clone(obj[key]);
    }
  }
  return copy;
}

// examples
var foo = {
  name: 'foo'
};

var bar = clone(foo);

mixin(foo, {
  github: 'bredele'
});

// foo.github => bredele
// bar.github => undefined
// bar.name; => foo