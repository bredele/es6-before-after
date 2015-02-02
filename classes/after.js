class Animal {

  constructor(type = 'unknown') {
    this.type = type;
  }

  who() {
    return 'animal:' + this.type;
  }
  
}



class Dog extends Animal {

  constructor(type) {
    super(type);
  }

  noise() {
    return 'woof!';
  }
  
}