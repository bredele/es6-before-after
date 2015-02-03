
var names = function*() {
  yield 'olivier';
  yield 'bruno';
  yield 'amy';
};

names.next();
names.next();
names.next();
names.next();

var result = names.next();
while(!result.done) {
	result = names.next();
	console.log(result.value);
}
