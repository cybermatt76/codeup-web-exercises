// # Loops-Arrays-Objects JavaScript Assessment Study Problems
//
// ## Problem 1

// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//
// ```js
// ["fred", true, 5, 3]
// ```
//
// Example output:
//
// ```js
// [3, 5]
// ```

function filterNumbers(arr) {
    return arr.filter((el) => typeof el === "number").sort((a, b) => a - b);
}

function filterNumbers(arr) {
    return arr.filter((el) => typeof el === "number").sort((a, b) => a - b);
}

// ## Problem 2
//
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
// ```js
// [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
// ``
// Example Output:
//
// ```js
// [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];
// ```

function getOlder(dogs) {
    dogs.forEach((dog) => (dog.age += 1));
}

function getOlder(dogs) {
    return dogs.map(dog => ({ ...dog, age: dog.age + 1 }));
}
// ## Problem 3
//
// Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
// ```js
// [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ]
// ```
//
// Example Output:
//
// ```js
// [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false // stays the same
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: false // changed to false
//     }
// ]
// ```

function washCars(cars) {
    cars.forEach(car => car.isDirty = false);
}

function washCars(cars) {
    return cars.map(car => ({ ...car, isDirty: false }));
}

// ## Problem 4
//
// Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
// Example Input:
//
// ```js
// [
//     {
// 		isAdmin: true,
// 		email: 'user1@email.com'
//     },
//     {
// 		isAdmin: true,
// 		email: 'user2@email.com'
//     }
//     {
//     	isAdmin: false,
//     	email: 'user3@email.com'
//     }
// ];
// ```
//
// Example Output (before refactor):
//
// ```js
// 2
// ```
//
// Example Output (after 1st refactor):
//
// ```js
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// ```
//
// Example Output (after 2nd refactor):
//
// ```js
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
// ```

function adminList(users) {
    const admins = users.filter((user) => user.isAdmin);
    return admins.length;
}

function adminList(users) {
    const admins = users.filter((user) => user.isAdmin);
    return admins.map((admin) => admin.email);
}

function adminList(users) {
    return users.filter((user) => user.isAdmin);
}


// ## Problem 5
//
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
//
// Example Input:
//
// ```js
// var breads  = [
//     "white",
//     "wheat",
//     "rhy",
//     "white"
// ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
//
// Example Output:
//
// ```js
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
// ```

function makeSandwichObjects(breads, fillings) {
    const sandwiches = [];
    for (let i = 0; i < breads.length; i++) {
        sandwiches.push({ bread: breads[i], filling: fillings[i] });
    }
    return sandwiches;
}

function makeSandwichObjects(breads, fillings) {
    return breads.map((bread, i) => ({ bread, filling: fillings[i] }));
}


// ## Problem 6
//
// Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.
//
// Example Input:
//
// ```js
// {
// 	propA: true,
// 	propB: "hello"
// 	propC: 23,
// 	propD: "world"
// }
// ```
//
// Example Output:
//
// ```js
// ['h', 'w']
// ```

function firstLettersOfStringProps(obj) {
    const letters = [];
    for (const prop in obj) {
        if (typeof obj[prop] === 'string') {
            letters.push(obj[prop][0]);
        }
    }
    return letters;
}

function firstLettersOfStringProps(obj) {
    return Object.values(obj).filter(val => typeof val === 'string').map(val => val[0]);
}

// ## Problem 7
//
// Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.
//
// Example Input:
//
// ```js
// [
// 	{
// 		name: "Fred Smith",
// 		favColor: "Blue",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		favPet: "Dogs",
// 		isAdmin: true,
// 		age: 37
// 	{,
// 	{
// 		phoneNumber: "5552759898",
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
//
// ```
//
// Example Output:
//
// ```js
// [
// 	{
// 		name: "Fred Smith",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		age: 37
// 	{,
// 	{
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
//
// ```

function returnBasicUserData(users) {
    const basicUsers = [];
    for (const user of users) {
        const { name, age } = user;
        basicUsers.push({ name, age });
    }
    return basicUsers;
}

function returnBasicUserData(users) {
    return users.map(({ name, age }) => ({ name, age }));
}

// ## Problem 8
//
// Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.
//
// Example 1 Input:
//
// ```js
// ['hello', true, 25, null, undefined, '', 'world']
// ```
//
// Example 1 Output:
//
// ```js
// 10
// ```
//
// Example 2 Input:
//
// ```js
// {
// 	someProp1: true,
// 	someProp2: null,
// 	someProp3: "hello",
// 	someProp4: 88,
// 	someProp5: "world"
// }
// ```
//
// Example 2 Output:
//
// ```js
// 10
// ```

function returnCharCount(data) {
    let count = 0;
    if (Array.isArray(data)) {
        for (const item of data) {
            if (typeof item === 'string') {
                count += item.length;
            }
        }
    } else if (typeof data === 'object') {
        for (const prop in data) {
            if (typeof data[prop] === 'string') {
                count += data[prop].length;
            }
        }
    }
    return count;
}

function returnCharCount(data) {
    if (Array.isArray(data)) {
        return data.filter(item => typeof item === 'string').join('').length;
    } else if (typeof data === 'object') {
        return Object.values(data).filter(item => typeof item === 'string').join('').length;
    }}