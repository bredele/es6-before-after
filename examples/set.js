var users = new Set();
users.add('olivier');
users.add('bruno');
users.add('amy');

console.log(users.has('amy'));
users.delete('amy');
console.log(users.has('amy'));

for(let user of users) {
	console.log(user);
}