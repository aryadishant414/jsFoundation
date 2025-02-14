// Way2
let genericCar = {
    tyres: 4,
    owner: "Dishant",
};

let tesla = {
    driver: "AI",
};
console.log(`Inside Tesla : `, tesla);
console.log(`Inside genericCar: `, genericCar);


// Object.setPrototypeOf(tesla, genericCar);




// Way1
let computer = {
    cpu: 12,
};

let lenovo = {
    screen:"HD",
};

let tomHardware = {};
// console.log("Printing computer : ", computer);
// console.log("Printing lenovo : ", lenovo);

// console.log("Printing computer prototypes : ", computer.__proto__);











