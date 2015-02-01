// clone

var foo = {
	name: 'foo'
};

var bar = Object.assign({}, foo);

foo.name = 'olivier';
// bar.name => foo



// mixin

var foo = {
	name: 'foo'
};

Object.assign(foo, {
	github: 'bredele'
});

// foo.github => bredele