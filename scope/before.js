/**
 * Global and function scope.
 */

// bad
name = 'olivier';

// good
var name = 'olivier';


// bad
function loop() {
  for(l = 10; l--;) {
    // do stuff
  }
}

// good
function loop() {
  for(var l = 10; l--;) {
    // do stuff
  }
  console.log(l);
}


/**
 * An example before with
 * a function scope.
 */

function dummy() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);  // => 20
  }
  console.log(x);  // => 20
}