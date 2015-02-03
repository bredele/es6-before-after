
var odd = [1,2,3,4].filter(x => x % 2);
console.log(odd);


var sum = [1,2,3,4]
  .filter(x => x % 2)
  .reduce((total, val) => {
  	console.log(total + val);
  });
