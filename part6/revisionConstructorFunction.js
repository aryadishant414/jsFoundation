function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;

    console.log("CAR MAke IS : ",this.make);
    console.log("CAR Model IS : ",this.model);
    
}
// let myCar = new Car("ferari", "Outstanding");
// console.log(myCar);
// let myAnotherCar = new Car("Range Rover", "Fabulous");
// console.log(myAnotherCar);


// WITHOUT NEW KEYWORD
// let myCar = Car("BMW", "Black");
// console.log(myCar);







// MORE EXAMPLE
function Tea(type) {
    this.type = type;
    this.description = function() {
        return `this is a cup of ${this.type}`;
    }
}

let masalaChai = new Tea("masala chaii");
// console.log(masalaChai);
// console.log(masalaChai.description());





// PRototypes in constructor functions
function Animal(species) {
    this.species = species;
}
// now adding prototypes manually inside this upper constructor function
Animal.prototype.behaviour = function() {
    return `${this.species} speaks`;
}

let myDog = new Animal("Dog");
// console.log(myDog);
// console.log(myDog.__proto__);
// console.log(myDog.__proto__.behaviour);
// console.log(myDog.__proto__.behaviour());
// console.log(myDog.behaviour);
// console.log(myDog.behaviour());


let myCat = new Animal("Cat");
// console.log(myCat);
// console.log(myCat.behaviour);
// console.log(myCat.behaviour());



// Checking errors by ourself
function Drink(name) {
    if(!new.target) {
        throw new Error("You must have to write new keyword")
    }
    this.name = name;
}

let tea = new Drink("CHAiiiii");
// console.log(tea);
let moreTea = Drink("Coffeeeee");
