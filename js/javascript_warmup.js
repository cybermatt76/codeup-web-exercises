// /**
//  * Convert Address to Object
//  * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
//  *
//  * Examples
//  *
//  * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
//  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
//  **/
//
// function convertAddressToObject(address) {
//     const parts = address.split(' ');
//     return {
//         streetNumber: parts[0],
//         streetName: parts.slice(1).join(' ')
//     };
// }
//
// console.log(convertAddressToObject("243 Funny Long Name Street"))
//
// // **
//  // * Count total pets
//  // * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//  // *
//  // * Examples
//  // *
//  const people = [
//      {name: 'Fernando Mendoza', pets: 1},
//          {name: 'Douglas Hirsh', pets: 8},
//      {name: 'Kenneth Howell', pets: 2}
//  ]
//
// function totalPets(people) {
//     let sum = 0;
//     for (let i = 0; i < people.length; i++) {
//         sum += people[i].pets;
//     }
//     return sum;
// }
//
// console.log(totalPets(people))
// /**
//  * Find the Smallest and Biggest Numbers
//  * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//  *
//  * Examples
//  * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//  * >> minMax([2334454, 5]) ➞ [5, 2334454]
//  * >> minMax([1]) ➞ [1, 1]
//  *
//  * Notes
//  * All test arrays will have at least one element and are valid.
//  */

// function minMax(numbers) {
//     if (!Array.isArray(numbers) || numbers.length === 0) {
//         return undefined; // return undefined for invalid input
//     }
//
//     const min = Math.min(...numbers);
//     const max = Math.max(...numbers);
//
//     return [min, max];
// }
//
// console.log(minMax([8, 4, 2, 9, 198, 1, 5678]))


 // * Drink Sorting
 // * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 // * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 // *
 // * Assume that the following array of drink objects needs to be sorted:
 // *
 // *
 // * Examples
 // * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

// drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
// ]
//
// function sortDrinkByPrice(drinks) {
//     if (!Array.isArray(drinks) || drinks.length === 0) {
//         return []; // return an empty array for invalid input
//     }
//
//     // sort the drinks array in ascending order by price
//     drinks.sort((a, b) => a.price - b.price);
//
//     return drinks;
// }
//
// console.log(sortDrinkByPrice(drinks))




// /**
//  * Get Sum of People's Budget
//  * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//  *
//  * Examples
//  *
//  * >> getBudgets([
//  *        { name: "John", age: 21, budget: 23000 },
//  *        { name: "Steve",  age: 32, budget: 40000 },
//  *        { name: "Martin",  age: 16, budget: 2700 }
//  *    ]) ➞ 65700
//  * >> getBudgets([
//  *        { name: "John",  age: 21, budget: 29000 },
//  *        { name: "Steve",  age: 32, budget: 32000 },
//  *        { name: "Martin",  age: 16, budget: 1600 }
//  *    ]) ➞ 62600
//  */
//
// const budget1 = [
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
// ]
// function getBudgets(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].budget;
//     }
//     return sum;
// }



// function getBudgets(arr) {
//     return arr.reduce((acc, cur) => acc + cur.budget, 0);
// }
//
// console.log(getBudgets(budget1))
//
// const cities = [
//     {
//         name: "New York City",
//         state: "New York",
//         population: 8336817
//     },
//     {
//         name: "Los Angeles",
//         state: "California",
//         population: 3979576
//     },
//     {
//         name: "Chicago",
//         state: "Illinois",
//         population: 2693976
//     },
//     {
//         name: "Houston",
//         state: "Texas",
//         population: 2320268
//     },
//     {
//         name: "Phoenix",
//         state: "Arizona",
//         population: 1680992
//     },
//     {
//         name: "Philadelphia",
//         state: "Pennsylvania",
//         population: 1584064
//     },
//     {
//         name: "San Antonio",
//         state: "Texas",
//         population: 1547253
//     },
//     {
//         name: "San Diego",
//         state: "California",
//         population: 1423851
//     },
//     {
//         name: "Dallas",
//         state: "Texas",
//         population: 1343573
//     },
//     {
//         name: "San Jose",
//         state: "California",
//         population: 1030119
//     },
//     {
//         name: "Austin",
//         state: "Texas",
//         population: 964254
//     },
//     {
//         name: "Jacksonville",
//         state: "Florida",
//         population: 903889
//     },
//     {
//         name: "Fort Worth",
//         state: "Texas",
//         population: 895008
//     },
//     {
//         name: "Columbus",
//         state: "Ohio",
//         population: 892533
//     },
//     {
//         name: "San Francisco",
//         state: "California",
//         population: 883305
//     },
//     {
//         name: "Charlotte",
//         state: "North Carolina",
//         population: 885708
//     },
//     {
//         name: "Indianapolis",
//         state: "Indiana",
//         population: 876384
//     },
//     {
//         name: "Seattle",
//         state: "Washington",
//         population: 753675
//     },
//     {
//         name: "Denver",
//         state: "Colorado",
//         population: 727211
//     },
//     {
//         name: "Washington",
//         state: "District of Columbia",
//         population: 702455
//     }
// ];
//
// for (let i = 0; i < cities.length; i++) {
//     console.log(`${cities[i].name}, ${cities[i].state}`);
// }
//
// function isInTexas(cityObject){
//     return cityObject.state === "Texas";
//     }

const moreCars = [
    { make: 'Ford', model: 'Mustang', mileage: 34567 },
    { make: 'Ford', model: 'F-150', mileage: 12345 },
    { make: 'Ford', model: 'Escape', mileage: 45678 },
    { make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
    { make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
    { make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
    { make: 'Buick', model: 'Enclave', mileage: 23456 },
    { make: 'Buick', model: 'Regal', mileage: 56789 },
    { make: 'Jeep', model: 'Wrangler', mileage: 34567 },
    { make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
    { make: 'Dodge', model: 'Charger', mileage: 12345 },
    { make: 'Dodge', model: 'Durango', mileage: 45678 },
    { make: 'Lincoln', model: 'MKZ', mileage: 78901 },
    { make: 'Lincoln', model: 'Navigator', mileage: 23456 },
    { make: 'GMC', model: 'Sierra', mileage: 56789 },
    { make: 'GMC', model: 'Terrain', mileage: 34567 },
    { make: 'Ford', model: 'Focus', mileage: 12345 },
    { make: 'Ford', model: 'Explorer', mileage: 45678 },
    { make: 'Chevrolet', model: 'Impala', mileage: 23456 },
    { make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
    { make: 'Buick', model: 'LaCrosse', mileage: 34567 },
    { make: 'Jeep', model: 'Renegade', mileage: 12345 },
    { make: 'Jeep', model: 'Compass', mileage: 45678 },
    { make: 'Dodge', model: 'Challenger', mileage: 78901 },
    { make: 'Lincoln', model: 'Continental', mileage: 23456 },
    { make: 'Lincoln', model: 'Aviator', mileage: 56789 },
    { make: 'GMC', model: 'Yukon', mileage: 34567 },
    { make: 'GMC', model: 'Acadia', mileage: 12345 },
    { make: 'Ford', model: 'Ranger', mileage: 45678 },
    { make: 'Ford', model: 'Bronco', mileage: 78901 },
    { make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
    { make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
    { make: 'Buick', model: 'Encore', mileage: 34567 },
    { make: 'Jeep', model: 'Cherokee', mileage: 12345 },
    { make: 'Dodge', model: 'Journey', mileage: 45678 },
    { make: 'Lincoln', model: 'Corsair', mileage: 78901 },
    { make: 'GMC', model: 'Canyon', mileage: 23456 },
    { make: 'Honda', model: 'Civic', mileage: 34567 },
    { make: 'Honda', model: 'Accord', mileage: 12345 },
    { make: 'Honda', model: 'CR-V', mileage: 45678 },
    { make: 'Toyota', model: 'Corolla', mileage: 56789 },
    { make: 'Toyota', model: 'Camry', mileage: 23456 },
    { make: 'Toyota', model: 'Rav4', mileage: 78901 },
    { make: 'Kia', model: 'Optima', mileage: 23456 },
    { make: 'Kia', model: 'Sportage', mileage: 56789 },
    { make: 'Kia', model: 'Soul', mileage: 34567 },
    { make: 'Hyundai', model: 'Elantra', mileage: 67890 },
    { make: 'Hyundai', model: 'Sonata', mileage: 12345 },
    { make: 'Hyundai', model: 'Tucson', mileage: 45678 },
    { make: 'Suzuki', model: 'Swift', mileage: 78901 },
    { make: 'Suzuki', model: 'Vitara', mileage: 23456 },
    { make: 'Mazda', model: 'CX-5', mileage: 56789 },
    { make: 'Mazda', model: 'Mazda3', mileage: 34567 },
    { make: 'Daihatsu', model: 'Charade', mileage: 12345 },
    { make: 'Daihatsu', model: 'Mira', mileage: 45678 },
    { make: 'Toyota', model: 'Yaris', mileage: 23456 },
    { make: 'Toyota', model: 'Highlander', mileage: 56789 },
    { make: 'Honda', model: 'Pilot', mileage: 78901 },
    { make: 'Honda', model: 'CR-Z', mileage: 23456 },
    { make: 'Suzuki', model: 'Jimny', mileage: 34567 },
    { make: 'Suzuki', model: 'Celerio', mileage: 12345 },
    { make: 'Mazda', model: 'CX-3', mileage: 45678 },
    { make: 'Mazda', model: 'Mazda6', mileage: 78901 },
    { make: 'Toyota', model: 'Tacoma', mileage: 23456 },
    { make: 'Toyota', model: 'Sienna', mileage: 56789 },
    { make: 'Kia', model: 'Stinger', mileage: 34567 },
    { make: 'Kia', model: 'Niro', mileage: 12345 },
    { make: 'Hyundai', model: 'Venue', mileage: 45678 },
    { make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
    { make: 'Daihatsu', model: 'Terios', mileage: 23456 },
    { make: 'Daihatsu', model: 'Materia', mileage: 56789 },
    { make: 'Suzuki', model: 'Alto', mileage: 34567 },
    { make: 'Suzuki', model: 'Escudo', mileage: 12345 },
    { make: 'Fiat', model: '500', mileage: 56789 },
    { make: 'Fiat', model: 'Panda', mileage: 98765 },
    { make: 'Fiat', model: 'Tipo', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
    { make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
    { make: 'BMW', model: '3 Series', mileage: 56789 },
    { make: 'BMW', model: '5 Series', mileage: 98765 },
    { make: 'BMW', model: 'X5', mileage: 23456 },
    { make: 'Volvo', model: 'XC40', mileage: 56789 },
    { make: 'Volvo', model: 'XC60', mileage: 98765 },
    { make: 'Volvo', model: 'XC90', mileage: 12345 },
    { make: 'Audi', model: 'A3', mileage: 78901 },
    { make: 'Audi', model: 'A4', mileage: 23456 },
    { make: 'Audi', model: 'Q5', mileage: 56789 },
    { make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
    { make: 'Jaguar', model: 'XE', mileage: 98765 },
    { make: 'Jaguar', model: 'XF', mileage: 12345 },
    { make: 'Volkswagen', model: 'Golf', mileage: 56789 },
    { make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
    { make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
    { make: 'Fiat', model: 'Doblo', mileage: 12345 },
    { make: 'Fiat', model: '500L', mileage: 56789 },
    { make: 'Fiat', model: 'Spider', mileage: 98765 },
    { make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
    { make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
    { make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
    { make: 'BMW', model: 'M3', mileage: 23456 },
    { make: 'BMW', model: 'M5', mileage: 56789 },
    { make: 'BMW', model: 'X3', mileage: 98765 },
    { make: 'Volvo', model: 'S60', mileage: 12345 },
    { make: 'Volvo', model: 'S90', mileage: 23456 },
    { make: 'Volvo', model: 'V90', mileage: 56789 },
    { make: 'Audi', model: 'Q3', mileage: 78901 },
    { make: 'Audi', model: 'Q7', mileage: 23456 },
    { make: 'Audi', model: 'TT', mileage: 56789 }
];

// for (let i = 0; i < moreCars.length; i++) {
//     const car = moreCars[i];
//     if (car.make === 'Ford') {
//         console.log(`${car.make} ${car.model}, mileage: ${car.mileage}`);
//     }
// }

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     if (car.make.startsWith('F')) {
//         console.log(`${car.make} ${car.model}, mileage: ${car.mileage}`);
//     }
// }

// for (let i = 0; i < moreCars.length; i++) {
//     const car = moreCars[i];
//     if (car.mileage < 25000) {
//         console.log(`${car.make} ${car.model}, mileage: ${car.mileage}`);
//     }
// }

// function isLowMileage(moreCars) {
//     if (moreCars.mileage < 50000) {
//         return true;
//     } else {
//         return false;
//     }
// }
// for (let i = 0; i < moreCars.length; i++) {
//     let car = moreCars[i];
//     if (isLowMileage(car)) {
//         console.log(car.make + " " + car.model + " has low mileage.");
//     } else {
//         console.log(car.make + " " + car.model + " has high mileage.");
//     }
// }
//
// moreCars.forEach(function(car) {
//     if (isLowMileage(car)) {
//         console.log(car.make + " " + car.model + " has low mileage.");
//     } else {
//         console.log(car.make + " " + car.model + " has high mileage.");
//     }
// });

function arrayOfMultiples(num, length) {
    let result = [];

    for (let i = 1; i <= length; i++) {
        result.push(num * i);
    }

    return result;
}

moreCars.sort(function(a, b) {
    let makeA = a.make.toLowerCase();
    let makeB = b.make.toLowerCase();

    if (makeA < makeB) {
        return -1;
    }
    if (makeA > makeB) {
        return 1;
    }
    return 0;
});

// Display sorted array
console.log(moreCars);