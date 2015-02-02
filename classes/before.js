// prototype
function Pet(type) {
  this.type = type;
}

Pet.prototype.who = function() {
  return 'animal:' + this.type;
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