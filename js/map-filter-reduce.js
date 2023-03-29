// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach()
//
// const numbers = [1, 2, 3, 4, 5];
//
// const doubledNumbers = numbers.map((number) => {
//     return number * 2;
// });
//
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
//
// const names = ["Alice", "Bob", "Charlie", "David"];
//
// const nameLengths = names.map((name) => {
//     return name.length;
// });
//
// console.log(nameLengths); // Output: [5, 3, 7, 5]
// const numbers = [1, 2, 3, 4, 5];
//
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });
//
// console.log(evenNumbers); // Output: [2, 4]
//
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "David", age: 40 }
// ];
//
// const overThirty = people.filter((person) => {
//     return person.age > 30;
// });
//
// console.log(overThirty); // Output: [{ name: "Charlie", age: 35 }, { name: "David", age: 40 }]
//
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
//
// console.log(sum); // Output: 15
//
// const numbers = [1, 2, 3, 4, 5];
//
// const product = numbers.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
// }, 1);
//
// console.log(product); // Output: 120


let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];

// Starting with an array of numbers, use .map to create an array with all the numbers squared.
const numbersSquared = randomNumbers.map((number) => {
    return number * number;
});

console.log(numbersSquared)

const books = [
    {
        title: "Mexican Gothic",
        author: {
            firstName: "Sylvia",
            lastName: "Moreno"
        }
    },
    {
        title: "All Systems Red",
        author: {
            firstName: "Martha",
            lastName: "Wells"
        }
    },
    {
        title: "1177 B.C.: The Year Civilization Collapsed",
        author: {
            firstName: "Eric",
            lastName: "Cline"
        }
    },
    {
        title: "Version Control With Git",
        author: {
            firstName: "Jon",
            lastName: "Loeliger"
        }
    },
    {
        title: "Data Structures the Fun Way",
        author: {
            firstName: "Jeremy",
            lastName: "Kubica"
        }
    }
]

const authorNames = books.map((book) => {
    return `${book.author.firstName} ${book.author.lastName}`;
});

console.log(authorNames);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const underTenThousandMiles = cars.filter(car => {
    return car.mileage < 10000;
})

console.log(underTenThousandMiles)

const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

const fiveLetterSmashers = smashers.filter(smasher => smasher.length === 5);

console.log(fiveLetterSmashers);

const overTenSmashers = smashers.filter(smasher => smasher.length > 10);

console.log(overTenSmashers)

const sortedSmashers = smashers.sort();

console.log(sortedSmashers);

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

const usedCarPrices =usedCars.map(car =>  car.price)

console.log(usedCarPrices)

let totalValueOfUsedCars = usedCarPrices.reduce((acc, price,) => {

    console.log(`The `)

});

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];


const total = aHundredNums.reduce((a,b) => a + b);
const avg = total / aHundredNums.length;

console.log(`The total is ${total} and the average is ${avg}`);

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threelangages = users.filter((user) => {
    return user.languages.length >= 3;
});
 console.log(threelangages);

// Use .map to create an array of strings where each element is a user's email address

const emails = users.map((user) => {
    return user.email;
});

console.log(emails);

const totalYears = users.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.yearsOfExperience;
}, 0);

console.log(totalYears);
const averageYears = totalYears / users.length;

console.log(averageYears);

const longestEmail = users.reduce((accumulator, currentValue) => {
    if (currentValue.email.length > accumulator.length) {
        return currentValue.email;
    } else {
        return accumulator;
    }
}, '');

console.log(longestEmail);

const instructors = users.reduce((accumulator, currentValue) => {
    if (accumulator === '') {
        return `Your instructors are: ${currentValue.name}`;
    } else {
        return `${accumulator}, ${currentValue.name}`;
    }
}, '');

console.log(instructors);

const uniqueLanguages = users.reduce((accumulator, currentValue) => {
    for (let language of currentValue.languages) {
        if (!accumulator.includes(language)) {
            accumulator.push(language);
        }
    }
    return accumulator;
}, []);

console.log(uniqueLanguages);



const totalMileage = cars.reduce((acc, car) => {
    return acc + car.mileage},
    0
);

console.log(totalMileage)

const highestMileage = cars.reduce((acc, car, index, array) => {
    if (index === array.length -1) {
        acc.push(car.mileage);
        return acc.sort((a, b)=>b-a)[0];
    } else {
        acc.push(car.mileage);
        return acc;
    }
}, []);

// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
 console.log('Exercise 1:');

let dogNames = dogs.map((dog) => dog.dogName)

console.log(dogNames)



// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');

let dogAges = dogs.map((dog) => dog.age)

console.log(dogAges)


// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');

const newDogsArray = dogs.map(dog => ({dogName: dog.dogName, age: dog.age}));

console.log(newDogsArray);

// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');

const dogsUnderTen = dogs.filter(dog => dog.age < 10);

console.log(dogsUnderTen)

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');

const dogsNamedLexie = dogs.filter(dog => dog.dogName === "Lexie");

console.log(dogsNamedLexie)

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');

const trainedUnderTen = dogs.filter(dog => dog.isTrained === true) || (dog => dog.age < 10)

console.log(trainedUnderTen)

// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');

const allDogNames = dogs.reduce((accumulator, currentValue) => {
    if (accumulator === '') {
        return `${currentValue.dogName}`;
    } else {
        return `${accumulator}${currentValue.dogName}`;
    }
}, '');

console.log(allDogNames)

// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');

const totalDogAges = dogs.reduce((a, b) => {
    return a + b.age;
}, 0);

console.log(totalDogAges)

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');

const dogAreTrained = dogs.reduce((acc, dog) => {
    if (dog.isTrained) {
        acc.push(dog);
    }
    return acc;
}, []);

// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');

const averageDogYears = totalDogAges/ dogs.length;

console.log(averageDogYears);

// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');

const averageTrainedDog = dogAreTrained/ dogs.length;

console.log(averageTrainedDog)
// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

const untrainedDogs = dogs.filter(dog => !dog.isTrained);
const untrainedDogNames = untrainedDogs.map(dog => dog.dogName);
const totalLength = untrainedDogNames.reduce((acc, name) => acc + name.length, 0);
const averageLength = totalLength / untrainedDogNames.length;

console.log(averageLength);

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');


const threeYearOldDogs = dogs.filter(dog => dog.age === 3);
const firstLetters = threeYearOldDogs.map(dog => dog.dogName[0]);
const result = firstLetters.join('');

console.log(result);










