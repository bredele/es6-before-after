var computed = 'something';
var user = {
	name: 'olivier',
	get hello() {
		return 'hello ' + this.name;
	},
	[computed] : true
};


console.log(user.hello);
console.log(user[computed]);