/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.
*/

// let sum = 0;
// let i = 1;
// while(i <= 5) {
//     sum += i;
//     i++;
// }
// console.log("Sum is : ", sum);

/*
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'
*/
// let countdown = [];
// let i = 5;
// while (i >= 1) {
//   countdown.push(i);
//   console.log(countdown);
//   i--;
// }
// console.log("Final countdown array is : ", countdown);

/*
3. Write a `do while` loop that prompts a user to enter their favourite tea type until they enter `"stop"`.
    Store each tea type in an array named `teaCollection`.
*/

// let teaCollection = [];
// let favouriteTea;
// do {
//   favouriteTea = prompt("Please enter your favourite tea : ");
//   if(favouriteTea !== "stop") {
//     teaCollection.push(favouriteTea);
//     console.log(teaCollection);
//   }
// } while (favouriteTea !== "stop");

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
// let total = 0;
// let i = 1;
// do {
//   total += i;
//   i++;
// } while (i <= 3);

// console.log("Total from 1 to 3 is : ", total);

/*
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
// let givenArray = [2, 4, 6];
// let multipliedNumbers = [];
// for(let i = 0 ; i < givenArray.length ; i++) {
//   let product = 2 * givenArray[i];
//   multipliedNumbers.push(product);
//   console.log("inside multiplies numbers array :" ,multipliedNumbers);
// }

/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named `cityList`.
*/
let givenArray = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < givenArray.length; i++) {
  cityList.push(givenArray[i]);
  console.log(cityList);
}
