// better apply
function test() { }
var args = [0, 1, 2];
f(...args);

// better new
var olivier = new User(...args);

// better push
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);