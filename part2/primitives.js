//Number

let balance = 120;

// this below line is converting our primitive datatype i.e number into non-primitive datatype i.e into an object
let anotherBalance = new Number(120); //not recommended

// console.log(balance);
// console.log(anotherBalance.valueOf());


// console.log(typeof balance);
// console.log(typeof anotherBalance);



//boolean
let isActive = true;
let isReallyActive = new Boolean(true) //not recommended

// console.log(typeof isActive);
// console.log(typeof isReallyActive);



//null and undefined

// let firstname;
// console.log(firstname);

let firstname = null;  //null means khaali kuch nhi (empty) but its not zero its just a null
let lastname = undefined;

// console.log(firstname);
// console.log(lastname);



//string
let myString = "hello";
let myStringOne = "Hola";
let username = "dishant";

let oldGreet = myString + " " + "dishant";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;

let demoOne = `Value is ${2*2}`;
// console.log(greetMessage);
// console.log(demoOne);



//symbol
// symbol is used where we want uniqueness
// every symbol is unique no matter there value is same or not
let sm1 = Symbol("dishant");
let sm2 = Symbol("dishant");

console.log(sm1 == sm2);
console.log(sm1);
console.log(sm2);




