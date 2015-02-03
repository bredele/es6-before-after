class Animal {
  constructor(type = 'unknown') {
  	this.type = type;
  }

  toString() {
  	return `type is ${this.type}`;
  }
}

class Dog extends Animal {
	constructor() {
		super('dog');
	}

	noise() {
		return 'woof';
	}
}

var animal = new Animal();
console.log(animal.toString());

var dog = new Dog();
console.log(dog.toString());

