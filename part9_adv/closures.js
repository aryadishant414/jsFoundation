// function outer() {
//     let counter = 4;

//     function inner() {
//         counter++;
//         return counter;
//     }
//     return inner;
// }

// let increment = outer();
// // console.log(increment);
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());



// Not a Closure function example below :
// function outer() {
//     let counter = 4;

//     function inner() {
//         counter++;
//         return counter;
//     }
//     inner();
// }

// let increment = outer();
// console.log(increment);



// This is also a closure but inside inner function we have not return the counter so the `increment` variable will not hold anything so it will print `undefined`
function outer() {
    let counter = 4;

    function inner() {
        counter++;
        
    }
    return inner;
}

let increment = outer();
console.log(increment());






