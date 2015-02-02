// prototype
function Pet(type) {
  this.type = type;
}

Pet.prototype.who = function() {
  return 'animal:' + this.type;
};



// prototype inheritance
function Dog(type) {
  Pet.call(this, type);
}

Dog.prototype = Pet.prototype;

Pet.prototype.noise = function() {
  return 'woof';
};




// factory 
function Pet(type) {

  this.who = function() {
    return 'animal:' + type;
  };

}


// factory inheritance 
var Dog = (function() {

  function Dog() {

    this.noise = function() {
      return 'woof!';
    };
  }

  return function() {
    Dog.prototype = new Pet('dog');
    return new Dog();
  };

})();