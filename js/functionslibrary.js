"use strict";
//
//
//
// // 1.
// function isGreaterThan (input1, input2) {
//     return input1 > input2
// }


// 2.
// function isLessThan (input1, input2) {
//     const parsedInput1 = parseInt(input1,10)
//     const parsedInput2 = parseInt(input2, 10)
//     return parsedInput1 < parsedInput2
// }

// function isLessThan(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return false;
//     }
//     return num1 < num2;
// }


// 3.
// function isEqualNumber (input1, input2) {
//     const parsedInputA = parseInt(input1, 10)
//     const parsedInputB = parseInt(input2, 10)
//     return parsedInputA === parsedInputB;
// }

// function isEqualNumber(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return false;
//     }
//     return num1 === num2;
// }

    // function isEqualNumber (num1, num2) {
    //     return (typeof num1 === 'number' && typeof num2 === 'number') ? num1 === num2 : false;
    // }

// function isEqualNumber(num1, num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return false;
//     }
//     return num1 === num2;
// }

//4.

// function isEqual (input1, input2) {
//     return input1 === input2;
// }

// function isEqual(value1, value2) {
//     return Object.is(value1, value2);
// }

// function isEqual(value1, value2) {
//     if (typeof value1 !== typeof value2) {
//         return false;
//     }
//     if (Number.isNaN(value1) && Number.isNaN(value2)) {
//         return true;
//     }
//     return value1 === value2;
// }



//5.

// function isNot (input1) {
//     if (input1 === null) {
//         return false
//     }
//     return !input1;
// }

// function isNot(value) {
//     if (typeof value !== 'boolean') {
//         return false;
//     }
//     return !value;
// }

// function isNot(value) {
//     return typeof value === 'boolean' ? !value : false;
// }

// function calcAbs (input1) {
//     const calcAbsinput = parseFloat(input1, 10);
//         return Math.abs(calcAbsinput)
//     }

// function calcAbs(num) {
//     if (num === null || isNaN(num)) {
//         return 0;
//     }
//     return Math.abs(num);
// }

// function calcCube (input1) {
//     const calcCubeinput = parseFloat(input1, 10);
// }

// function calcCube(num) {
//     if (num === null || isNaN(num)) {
//         return 0;
//     }
//     return Math.pow(num, 3);
// }

// const calcCube = (num) => {
//     if (num === null || isNaN(num)) {
//         return 0;
//     } else {
//         return num ** 3;
//     }
// };


// function isTypeMatch (input1, input2) {
//     return input1 == input2;
// }

// function isTypeMatch(arg1, arg2) {
//     if (arg1 === null || arg2 === null) {
//         return false;
//     }
//     return typeof arg1 === typeof arg2;
// }

// function isTypeMatch(arg1, arg2) {
//     return (arg1 === null || arg2 === null) ? false : typeof arg1 === typeof arg2;
// }

// function findLongestString(str1, str2) {
//     if (typeof str1 !== 'string' && typeof str2 !== 'string') {
//         return '';
//     } else if (typeof str1 !== 'string') {
//         return str2;
//     } else if (typeof str2 !== 'string') {
//         return str1;
//     } else {
//         return str1.length > str2.length ? str1 : str2;
//     }
// }

// function findLongestString(str1, str2) {
//     return (typeof str1 === "string" && typeof str2 === "string") ? (str1.length >= str2.length ? str1 : str2) : (typeof str1 === "string" ? str1 : (typeof str2 === "string" ? str2 : ""));
// }
//
// function isFactor(num1, num2) {
//     if (num1 === null || num2 === null || isNaN(num1) || isNaN(num2) || num1 === 0) {
//         return false;
//     }
//     return num2 % num1 === 0;
// }

// function isFactor(num1, num2) {
//     return (num1 !== null && num2 !== null && !isNaN(num1) && !isNaN(num2) && num1 !== 0) ? (num2 % num1 === 0) : false;
// }

// # Function Drills
//
// Functions using conditionals but not loops or arrays:
//
//     - Make a function named `isOdd(number)`
"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
function isNumericAndNotNaN(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}
function isNumericOrNumericString(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean";

}
function isANumber(num) {
    return isNumericAndNotNaN(num);
}

function increment(num) {
    if (isNumericOrNumericString(value)) {
        return parseFloat(value) + 1;
    }
    return false
}

function decrement(num) {
    if (isNumericOrNumericString(value)) {
        return parseFloat(num) - 1;
    }
    return false;
}

function getHighestNumber (val1, val2, val3){
    if (!isNumericOrNumericString(val1) || !isNumericOrNumericString(val2) || !isNumericOrNumericString(val3)) return false;
    return Math.max(val1, val2, val3);
}

function parseNumber (input) {
    return parseFloat(input);
}

function add (input1, input2) {
    if (!isNumericOrNumericString(input1) || !isNumericOrNumericString(input2)) return false;
    return parseFloat(input1) + parseFloat(input2);
}

function multiply (input1, input2) {
    if (!isNumericOrNumericString(input1) || !isNumericOrNumericString(input2)) return false;
    return parseFloat(input1) * parseFloat(input2);
}

function square (num1) {
    if (!isNumericOrNumericString(input1)) return false;
    return parseFloat(input1) * parseFloat(input1);
}

function sumOfSquares(input1, input2) {
    if (isNumericOrNumericString(input1) || isNumericOrNumericString(input2)) return false;
    return (parseFloat(input1) * parseFloat(input1)) + (parseFloat(input2)) *(parseFloat(input2))
}

function isPalindrome (input){
    if (isNumericOrNumericString(str) || str === undefined) return false;
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}


//- Make a function named `isEven(number)`
function isEven(number) {
       return number % 2 === 0;
}
//- Make a function named `identity(input)` that returns the input exactly as
//provided.

function identity(input) {
       return input;
}
//- Make a function named `isFive(input)`
function isFive(input){
       return (input === 5 || input === "five");
}
    console.log (isFive("thirty"))
// - Make a function named `addFive(input)` that adds five to some input.

function addFive(input) {
       return (input + 5)
}
console.log(addFive(4))
// - Make a function named `isMultipleOfFive(input)`

function isMultipleofFive(input) {
    if (input % 5 ===0) {
        return true;
    } else {
        return false;
    }
}
console.log (isMultipleofFive(6))
// - Make a function named `isThree(input)`

function isThree(input) {
       if (input === 3) {
           return true;
       } else {
           return false;
       }
}
console.log (isThree(3))
// - Make a function named `isMultipleOfThree(input)`

function isMultipleOfThree(input) {
       if (input % 3 === 0) {
           return true;
       } else {
           return false;
       }
}
console.log (isMultipleOfThree(12))

// - Make a function named `isMultipleOfThreeAndFive(input)`

function isMultipleofThreeAndFive(input) {
       if (input % 3 === 0, input % 5 === 0) {
         return true;
       } else {
           return false;
       }
}
console.log (isMultipleofThreeAndFive(30))
// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`

function isMultipleOf(target, n) {
       if (target % n === 0) {
           return true;
       } else {
           return false;
       }
}
console.log(isMultipleOf(48,2))

// - Make a function named `isTrue(boolean)`

function isTrue(boolean) {
       if (boolean == true){
           return true;
       } else {
           return false;
       }
}
// - Make a function named `isFalse(boolean)`

function isFalse(boolean) {
       if (boolean == false) {
           return true;
       } else {
           return false;
       }
}
// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true

function isTruthy(input) {
       if (input == true) {
           return true;
       } else {
           return false;
       }
}
console.log(isTruthy("cheese"))

// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false

function isFalsy(input) {
       if (input == false) {
           return true;
       } else {
           return false;
       }
}
// - Make a function named `isVowel(letter)`

function isVowel(letter) {
       const vowels = ['a', 'e', 'i', 'o', 'u'];
       return vowels.includes(letter.toLowerCase());
}
console.log(isVowel("a"))

// - Make a function named `isConsonant(letter)`

function isConsonant(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var lowercaseLetter = letter.toLowerCase();
    return (lowercaseLetter >= 'a' && lowercaseLetter <= 'z' && !vowels.includes(lowercaseLetter));
}
console.log(isConsonant("t"))
// - Make a function named `isCapital(letter)`
function isCapital(letter){
    return letter.toUpperCase() === letter;
}
console.log(isCapital("M"))
// - Make a function named `isLowerCase(letter)`

function isLowerCase(letter) {
       return letter.toLowerCase() === letter;
}
// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter

function hasLowerCase(string) {
    return (/[a-z]/.test(string));
}
console.log(hasLowerCase("cubs"))
// - Make a function named `isSpace(letter)` that returns if a character is a space
// character

function isSpace(character) {
    return character === ' ';
}
 console.log(isSpace(" "))
// - Make a function named `isZero(number)`

function isZero(number) {
       if (number === 0) {
           return true;
       } return false;
}
console.log(isZero(4))

// - Make a function named `notZero(input)` that returns true if the input is not
// zero

function notZero(input) {
       if (input !== 0 ) {
           return true;
       } else {
           return false;
       }
}
console.log(notZero("two"))

// - Write a function named `lowerCase(string)`

function lowerCase(string) {
    return string.toLowerCase();
}
console.log(lowerCase("DUDE"))

// - Write a function named `double(n)` that returns a number times two
function double(n) {
       return n * 2
}
console.log(double(56))

// - Write a function named `triple(n)` that returns a number times 3

function triple(n) {
       return n * 3;
}
// - Write a function named `quadruple(n)` that returns a number times 4

function quadruple(n) {
       return n * 4;
}

// - Write a function named `half(n)` that returns 1/2 of the provided input

function half(n) {
       return n / 2;
}

console.log(half(8));

// - Write a function named `subtract(a, b)` that returns `a` minus `b`

function subtract(a,b) {
    return a - b;
}

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`

function multiply(a,b) {
    return a * b;
}
console.log(multiply(7,9))

// - Write a function named divide(a, b) that returns `a` divided by ~b~


//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b

function remainder(a, b) {
    return a % b;
}
console.log(remainder(9,3))

// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b


// - Write a function named `cube(n)` that returns n * n * n

function cube(n) {
    return n * n * n;
}

// - Write a function named `squareRoot(n)` that returns the square root of the
// input

function squareRoot(n) {
    return Math.sqrt(n);
}

// - Write a function named `cubeRoot(n)` that returns the cube root of the input
function cubeRoot(n) {
    return Math.cbrt(n);
}


// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.
function invertSign(number) {
    if (number === 0) {
        return 0;
    } else if (number > 0) {
        return -number;
    } else if (number < 0) {
        return Math.abs(number);
    } else {
        return false;
    }
}

console.log(invertSign(3))

// - Write a function named `degreesToRadians(number)`

function degreesToRadians(number) {
    return number * (Math.PI / 180);
}


// - Write a function named `radiansToDegrees(number)`

function radiansToDegrees(number) {
    return number * (180 / Math.PI);
}

// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.

function isBlank(input) {
    return /^\s*$/.test(input);
}

function isBlank(input) {
    return input.trim() === '';
}

// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.

function trim(string) {
    return string.trim();
}


// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value

function areEqual(input1, input2) {
    return input1 == input2;
}

// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.

function areIdentical(input1, input2) {
    return input1 === input2;
}

// - Make a function named `not(input)` returns the input with a flipped boolean

function not(input) {
    return !input;
}

// - Make a function named `notNot(input)` that the negation of the negation of the
// input.

function notNot(input) {
    return !!input;
}

// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND

function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR

function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}

// - Write a function called `reverseString(string)` that reverses a string
function reverseString(string) {
    return string.split('').reverse().join('');
}
console.log(reverseString("I love Cheese"))

// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.

function absoluteValue(number) {
    return Math.abs(number);
}

// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}


//
//
//
// ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with `console.log(returnTwo())`

function returnTwo() {
    return 2;
}

//
//     1. Make a function called sayHowdy() which console.logs the string "Howdy!"
//
// Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value

function sayhowdy(){
console.log("Howdy!")
}

// 1. Make a function called returnName() that returns the string of your name
//
// Test this function with `console.log(returnName())`
//

function returnName() {
    return "Matthew Lorber";
}
 const myName = returnName()
console.log(myName);

//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with `console.log(addThree(5))`
//


//     1. Make a function called sayString() which returns the string input passed in.
//
// Test this function with `console.log(sayString('codeup'))`
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.
//
function identity(input) {
    return input;
}
const myInput = "Hello, world!";
const result = identity(myInput);
console.log(result); // outputs "Hello, world!" to the console


// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
//

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// - Write a function called `first(input)` that returns the first character in the
// provided string.
//

function first(input) {
    return input.charAt(0);
}

// - Write a function called `last(input)` that returns the last character of a
// string
//

function last(input) {
    return input.charAt(input.length - 1);
}
console.log(last("fantastic"));
// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
//

function rest(input) {
    return input.slice(1);
}

// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
//

function reverse(input) {
    return input.split("").reverse().join("");
}

// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
//

function isNumeric(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.
//

function count(input) {
    return input.length;
}


// - Write a function called `add(a, b)` that returns the sum of a and b
//

function add(a, b) {
    return a + b;
}

// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//

function subtract(a, b) {
    return a - b;
}

// - Write `multiply(a, b)` function that returns the product
//

function multiply(a, b) {
    return a * b;
}

// - Write a `divide(numerator, denominator)` function that returns a divided by b
//

function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numerator / denominator;
}

// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//

function remainder(number, divisor) {
    return number % divisor;
}


// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//

function square(a) {
    return a * a;
}

// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//

function sumOfSquares(a, b) {
    return add(square(a), square(b));
}


// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//

function doMath(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'remainder':
            return remainder(a, b);
        case 'square':
            return square(a);
        case 'sumOfSquares':
            return sumOfSquares(a, b);
        default:
            return 'Invalid operator';
    }
}


// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
//

function countWhitespace(str) {
    const leading = str.match(/^\s*/)[0].length;
    const trailing = str.match(/\s*$/)[0].length;

    return {
        leading: leading,
        trailing: trailing
    };
}

// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
//

function removeString(str, toRemove) {
    const index = str.indexOf(toRemove);
    if (index === -1) {
        // toRemove not found, return original string
        return str;
    } else {
        // toRemove found, remove it and return modified string
        return str.slice(0, index) + str.slice(index + toRemove.length);
    }
}

// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
//

function endsWithA(str) {
    return str.charAt(str.length - 1) === "a";
}

// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
//

function countLeadingSpaces(str) {
    const match = str.match(/^(\s*)/);
    return match ? match[1].length : 0;
}

// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//

function returnTrueMessage() {
    return "Hey, it's true!";
}

// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.

function willLoginUser(username, password, age, isAdmin) {
    if (isAdmin) {
        return username !== password;
    } else {
        return username !== password && age >= 18;
    }
}
