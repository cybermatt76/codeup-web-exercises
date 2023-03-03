/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/
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
/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

function minMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return undefined; // return undefined for invalid input
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return [min, max];
}

console.log(minMax([8, 4, 2, 9, 198, 1, 5678]))


 // * Drink Sorting
 // * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 // * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 // *
 // * Assume that the following array of drink objects needs to be sorted:
 // *
 // *
 // * Examples
 // * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

function sortDrinkByPrice(drinks) {
    if (!Array.isArray(drinks) || drinks.length === 0) {
        return []; // return an empty array for invalid input
    }

    // sort the drinks array in ascending order by price
    drinks.sort((a, b) => a.price - b.price);

    return drinks;
}

console.log(sortDrinkByPrice(drinks))




/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */