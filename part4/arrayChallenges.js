/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstElement = teaFlavors[0];
let firstTea = firstElement;



/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
let thirdElement = cities[2];
let favouriteCity = thirdElement;



/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
let secondElement = teaTypes[1];
// console.log("before changing the second element the array was : ", teaTypes);

teaTypes[1] = "jasmine tea"
// console.log("after changing the second element the array is : ", teaTypes);



/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai", "Sydney"];
// console.log("before push the array was : ", citiesVisited);
citiesVisited.push("Berlin");
// console.log("after push the array is : ", citiesVisited);



/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// console.log("before pop the array was : ", teaOrders);
const lastOrder = teaOrders.pop();
// console.log("DATA INSIDE LAST ORDER IS : ", lastOrder);

// console.log("after pop the array is : ", teaOrders);



/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
// console.log("Original array : ", popularTeas);
// console.log("soft copy array : ", softCopyTeas);


// console.log(popularTeas[2]);
// console.log(softCopyTeas[1]);


softCopyTeas.pop();
// console.log("Original array : ", popularTeas);
// console.log("copy array : ", softCopyTeas);



/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice(); // another way but people use this very rarely


// console.log("original array : ", topCities);
// console.log("hard copy array : ", hardCopyCities);


topCities.pop();
// console.log("after pop operation original array : ", topCities);
// console.log("after pop operation hardcopy array : ", hardCopyCities);



/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);
// console.log(typeof worldCities);



/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log("Length of the Array is : " ,menuLength);



/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto","London",  "Cape Town", "Vancouver"];
// let isLondonInList = cityBucketList.includes("London");
// let isLondonInList = cityBucketList.includes("london");
// console.log(isLondonInList);



//another way
// let isLondonInList = false;
// for(let i = 0 ; i < cityBucketList.length ; i++) {
//     if(cityBucketList[i] == "London") {
//         isLondonInList = true;
//         break;
//     }
// }
// console.log(isLondonInList);





