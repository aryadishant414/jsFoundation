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

    // SYNTAX
// for (const element of object) {
    
// }
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

/*
5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities populations in a new object named `cityPopulations`.

    let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
    };

    // SYNTAX
    for (const key in object) {

    }
*/

// let citiesPopulation = {
//     "London": 8900000,
//     "New York": 8400000,
//     "Paris": 2200000,
//     "Berlin": 3500000
//     };

// let cityNewPopulations = {};

// for (const eachCity in citiesPopulation) {
//     if(eachCity === "Berlin") {
//         break;
//     }
//     cityNewPopulations[eachCity] = citiesPopulation[eachCity];
// }
// console.log("Inside New City Population Object : ", cityNewPopulations);

/*
6. Use a `for-in` loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}
*/

// let worldCities = {
//   Sydney: 5000000,
//   Tokyo: 9000000,
//   Berlin: 3500000,
//   Paris: 2200000,
// };

// let largeCities = {};

// for (const eachKey in worldCities) {
//     if(worldCities[eachKey] < 3000000) {
//         continue;
//     }
//     largeCities[eachKey] = worldCities[eachKey];
//     // console.log(eachKey);

// }
// console.log("Inside largeCities object : ",largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
    Stop the loop when `"chai" is found, and store all previous tea types in an array named `availableTeas`.

    // SYNTAX
    array.forEach(element => {
    
    });
*/

// let givenTeas = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// givenTeas.forEach((eachElement) => {
//     if(eachElement === "chai") {
//         return;
//     }
//     availableTeas.push(eachElement);
// });

// console.log("Inside available teas : ", availableTeas);

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
    Skip `"Sydney"` and store the other cities in a new array named `travelCities`. 
*/

// let givenArray = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let travelCities = [];

// givenArray.forEach((eachCity) => {
//     if(eachCity === "Sydney") {
//         return;  // return means we are just skipping the function for a particular chai not we are going out of the forEach loop means it will not stop the whole forEach loop.
//     }
//     travelCities.push(eachCity);
// })
// console.log("Inside travel cities : ", travelCities);

/*
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
    Skip the value `7` and multiply the rest by 2. Store the results in a new array named 'doubledNumbers`.
*/

// let givenArray = [2, 5, 7, 9];
// let doubledNumbers = [];

// for (let i = 0; i < givenArray.length; i++) {
//   if (givenArray[i] === 7) {
//     continue;
//   }
//   let product = 2 * givenArray[i];
//   doubledNumbers.push(product);
// }
// console.log(doubledNumbers);



/*
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named `shortTeas`.
*/

let givenArray = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for(const eachTea of givenArray) {
    if (eachTea.length > 10) {
        break;
    }
    shortTeas.push(eachTea);
}
console.log("Inside shortTeas array : ", shortTeas);
