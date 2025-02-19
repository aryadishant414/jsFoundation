function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`); 
};

let dishant = new Person("dishant");

// console.log(dishant.name);
// console.log(dishant.greet);
console.log(dishant.greet());
