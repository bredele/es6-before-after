var location = [42.23, -10];
var [latitude, longitude] = location;

console.log(latitude, longitude);


var size = { width: 100, height: 50 };
var { width, height } = size;

console.log(width, height);


var { width: w, height: h } = size;
console.log(w, h);
