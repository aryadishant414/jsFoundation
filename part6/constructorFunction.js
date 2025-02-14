// Constructor Function(Blueprint is created)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Constructor Function(Blueprint is created)
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Object Creation
// let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

// let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

// below we have not used `new` keyword so the object of car will not be created and Car will be treated as a normal function not a `constructor function` 
let myCar = Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = Car("Tata", "Safari");
// console.log(myNewCar);





// Constructor function / BLUEPRINT
function Tea(type) {
    this.type = type;
    this.describe = function() {
        return `this is a cup of ${this.type}`;
    }
}
// OBJECT CREATION
let lemonTea = new Tea("lemon tea");
// console.log(typeof lemonTea);

// console.log(lemonTea);
// console.log(lemonTea.describe());





// Learning protypes in constructor functions
function Animal(species) {
    this.species = species
}

// Adding Prototypes(additional properties) in our constructor function
Animal.prototype.sound = function() {
    return `${this.species} makes sound`;
}

let dog = new Animal("Dog");
// console.log(dog);
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat);
// console.log(cat.sound());




// Errors check EXPLICITELY in constructor functions
function Drink(name) {
    // console.log("INSIDE NEW : ", new.target)
    
    if(!new.target) {
        throw new Error("Drink must be called with new keyword");
        
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
