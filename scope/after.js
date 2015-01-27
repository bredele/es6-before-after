
/**
 * Let is global to the nearest
 * function or block scope.
 */

function loop() {
  let name = 'olivier';
  for(let i = 0; i < 10; i++) {
    // do stuff
  }
  console.log(name);
  console.log(i);
}


/**
 * An example after with
 * a function and block scope.
 */

function dummy() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);  // => 20
  }
  console.log(x);  // => 10
}