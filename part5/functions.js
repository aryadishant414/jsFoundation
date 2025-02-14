/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
    Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("Kadak Chaii");
// console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this functio, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
    Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return "Order confirmed for chai";
  }
  return confirmOrder();
}

// let orderConfirmation = orderTea("Kadak chaii");
// console.log(orderConfirmation);

/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price and quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
    Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(12, 5);
// console.log(`Total cost is : ${totalCost}`);

/**
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
    Return the result of calling `makeTea`. 
*/

function makeTea(typeOfTea) {
  return `makeTea : ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

/**
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
    Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

let score = 100;

function createTeaMaker() {
    
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
// console.log(teaMaker);
// console.log(teaMaker());
// console.log(teaMaker("green chaiii"));

// THis below is my tried solution and upper solution is Instructor's solution
// function ann(teaType) {
//     return `Making ${teaType}`;
// }

// function createTeaMaker(typeOfTea) {
//     return ann(typeOfTea)
// }

// let teaMaker = createTeaMaker("green tea");
// console.log(teaMaker);









// THESE BELOW ARE CODING TASKS THAT I AM WRITING IN THIS PARTICULAR FILE

// function filterNumbers(arr) {
//   const numArr = arr.filter((eachElement) => {
//       return typeof eachElement === 'number';
//   })
//   return numArr;
// }
// const arr = [1, "dish", "dishant", 5, 6];
// let result = filterNumbers(arr);
// console.log(result);
// console.log(arr);



// function isItTruthy(input) {
//   if(input === "true") {
//       return `It's truthy`;
//   } else {
//       return `It's falsey`;
//   }
// }
// let output = isItTruthy(0);
// console.log(output);




// function flipBoolean(input) {
//   let booll = Boolean(input);
//   console.log(booll);
  
//   booll = !booll;
//   console.log(booll);
  
//   // if(booll === 1) {
//   //     bool = 0;
//   // } else {
//   //     bool = 1;
//   // }
// }
// let output = flipBoolean("0");



// function stringToNumber(input) {
//   let conversion = Number(input);
//   if(isNaN(conversion)) {
//     return `Not a number`;
//   } else {
//     return conversion;
//   }

// }

// let output = stringToNumber("441");
// console.log(output);






