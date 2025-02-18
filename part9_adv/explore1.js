// Synchronous javascript example
// synchronous means line by line

// console.log("chaicode");
// for (let index = 0; index < 10 ; index++) {
//     console.log(index);
// }



// Asynchronous code example

// console.log("chaicode");

// function sayHello() {
//     console.log("I would like to say Hello");
    
// }

// setTimeout(() => {
//     sayHello();
// }, 4000);

// for (let index = 0; index < 10 ; index++) {
//     console.log(index);
// }

// Asynchronous Javascript One more example with some little changes in code

function sayHello() {
    console.log("I would like to say Hello");
    
}

setTimeout(() => {
    sayHello();
}, 4000);

console.log("chaicode");

for (let index = 0; index < 10 ; index++) {
    console.log(index);
}