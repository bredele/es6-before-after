var num = [1, 2, 3];
var arr = [...num, 4, 5, 6];

var result = add(...num);

console.log(arr);
console.log(result);


function add(x, y, z) {
	return x + y + z;
}
