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