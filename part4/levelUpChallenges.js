/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
    Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
// let givenTeas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];

// for(let i = 0; i < givenTeas.length; i++) {
//     if(givenTeas[i] === "chai") {
//         break;
//     }
//     selectedTeas.push(givenTeas[i]);
// }
// console.log("INSIDE SELECTED TEAs array : ", selectedTeas);



/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    Store the other cities in a new array named `visitedCities`. 
*/
// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];

// for(let i = 0 ; i < cities.length ; i++) {
//     if(cities[i] === 'paris' || cities[i] === 'Paris') {
//         continue;
//     }
//     visitedCities.push(cities[i]);
// }
// console.log("Inside visited cities array : ", visitedCities);



/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
    Store the numbers before `4` in an array named `smallNumbers`.
*/
// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];

// for (const eachElement of numbers) {
//     if(eachElement === 4) {
//         break;
//     }
//     smallNumbers.push(eachElement);
// }
// console.log("inside smallNumbers array : ", smallNumbers);



/*
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
    Store the other teas in an array named `preferredTeas`. 
*/

// let givenTeas = ["chai", "green tea", "herbal tea", "black tea"];
// let preferredTeas = [];
// for(const eachTea of givenTeas) {
//     if(eachTea === "herbal tea") {
//         continue;
//     }
//     preferredTeas.push(eachTea);
// }
// console.log(preferredTeas);
