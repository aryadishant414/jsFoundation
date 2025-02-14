// Way 2 to access `PROTOTYPES`
let genericCar = {
  tyres: 4,
  owner:"DISHANT"
};

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);
console.log(`generic car `, genericCar);
console.log(`tesla `, tesla);
console.log(`tesla `, tesla.tyres);
console.log(`tesla `, Object.getPrototypeOf(tesla));

// console.log(tesla.hasOwnProperty("driver"));
// console.log(tesla.hasOwnProperty("tyres"));
// console.log(tesla.hasOwnProperty("tys"));

// console.log(genericCar.hasOwnProperty("driver"));
console.log(genericCar.hasOwnProperty("tyres"));
console.log(genericCar.hasOwnProperty("owner"));
console.log(genericCar.hasOwnProperty("DISHANT"));




// Way 1 to access `PROTOTYPES`
// let computer = {
//     cpu: 12
// }

// let lenovo = {
//     screen: "HD",
//     __proto__: computer
// }

// let tomHardware = {}

// console.log(`Lenovo `, lenovo.__proto__);
