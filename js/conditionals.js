"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     color = color.toLowerCase();
//
//     if (color === 'red') {
//         return "Strawberries are red.";
//     } else if (color === 'blue') {
//         return "Blue is a great color!";
//     } else if (color === 'cyan') {
//         return "I have no idea what color cyan is....";
//         } else {
//         return "I'm sorry I don't like that color.";
//     }
// }
//
// console.log(analyzeColor('red'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('cyan'));
// console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColor(color) {
//     color = color.toLowerCase();
//     switch (color) {
//         case 'red':
//             return "I love red Corvettes.";
//         case 'blue':
//             return "Blue is a great color!";
//         case 'cyan':
//             return "I have no idea what color cyan is";
//         default:
//             return "I'm sorry, I have no opinion on other colors"
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// const color = prompt("What is your favorite color")
// function analyzeColor(color) {
//     color = color.toLowerCase();
//     switch (color) {
//         case 'red':
//             return "I love red Corvettes.";
//         case 'blue':
//             return "Blue is a great color!";
//         case 'cyan':
//             return "I have no idea what color cyan is";
//         default:
//             return "I'm sorry, I have no opinion on other colors"
//     }
// }
// alert(analyzeColor(color));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal (luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 0:
//             return totalAmount;
//         case 1:
//             return totalAmount - (totalAmount * 0.1);
//         case 2:
//             return totalAmount - (totalAmount * 0.25);
//         case 3:
//             return totalAmount - (totalAmount * 0.35);
//         case 4:
//             return totalAmount - (totalAmount * 0.5);
//         case 5:
//             return 0;
//         default:
//             return totalAmount
//     }
// }
//
// console.log(calculateTotal(2, 45.00))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// let totalAmount = parseFloat(prompt("How much was your bill?"));
// function calculateTotal (luckyNumber, totalAmount) {
//     switch (luckyNumber) {
//         case 0:
//             return totalAmount;
//         case 1:
//             return totalAmount - (totalAmount * 0.1);
//         case 2:
//             return totalAmount - (totalAmount * 0.25);
//         case 3:
//             return totalAmount - (totalAmount * 0.35);
//         case 4:
//             return totalAmount - (totalAmount * 0.5);
//         case 5:
//             return 0;
//         default:
//             return totalAmount
//     }
// }
// alert("Your lucky number is " + luckyNumber);
// alert("Your original price was " + totalAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
// alert("Your discounted price is " + calculateTotal(luckyNumber, totalAmount).toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// function formatToUSD(number) {
//     const formatter = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD'
//     });
//     return formatter.format(number);
// }
// console.log(formatToUSD(124))


const enterNumber = confirm("Would you like to enter a number?")

if (enterNumber) {
    const number = parseFloat(prompt("Please enter a number"));

    if (number % 2 === 0 ) {
        alert(`The number ${number} is even.`);
    } else {
        alert(`The number ${number} is odd.`);
    }
    alert(`The number plus 100 is ${number + 100}.`);
    if (number > 0) {
        alert(`The number ${number} is positive.`);
    } else if (number < 0) {
        alert(`The number${number} is negative.`);
    } else {
        alert(`The number ${number} is zero.`);
    }
} else {
    alert("You have chosen not to enter a number.")
}



// function getToDestination(age, isInsured, hasCar, canGetRideshare) {
//     var age = confirm("Is the rider over 16?");
//     if (age === true) {
//         // user clicked "ok"
//     } else {
//         // user clicked "cancel"
//     }
//     var isInsured = confirm("Does the rider have insurance?");
//     if (isInsured === true) {
//         // user clicked "ok"
//     } else {
//         //user clicked "cancel"
//     }
//     var hasCar = confirm("Does the rider have a car?");
//     if (hasCar === true) {
//         // user clicked "ok"
//     } else {
//         //user clicked cancel
//     }
//     var canGetRideshare = confirm("Can the rider get a rideshare?");
//     if (canGetRideshare === true) {
//         // user clicked ok
//     } else {
//         //user clicked cancel
//     }
//         if (age => 16 && isInsured && hasCar) {
//             return "You can drive yourself.";
//         } else if (age < 16, !isInsured || !hasCar, canGetRideshare) {
//             return "You can get an Uber.";
//         } else (age < 16, !isInsured, !hasCar, !canGetRideshare); {
//             return "You need to get a ride from a friend!";
//     }
// }
// ### IF / ELSE IF / ELSE
//
// #### Create a function called `getToDestination` which will help determine how a person can get to their destination!
//
//     It will accept 4 arguments and the parameter names are:
//
//     - age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//
// ---
//     1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
//     This `getToDestination` should not return any value, but rather console log based on the conditions met.
//
// ---
//
// #### getToDestination, part 2
//
// - Create a function called canGetRideshare() which will *RETURN* a boolean
// - It will determine if there are drivers nearby and the person has enough money for the ride
// - Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// - Call canGetRideshare() in the else if *after* !isLegalDriver &&...
// - Be sure to log to the user if they can or cannot get a rideshare
//
// BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// - Consider this: What if mileage determined:
//     - If the rider has enough funds?
//     - If there is a driver close enough to service the rider?

    //---
// ### SWITCH STATEMENTS
//
// Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
// - This will involve multiple switch statements and functions
// - Orchestrate the statements in a central function that is responsible for calling and checking for errors
//     each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
//     ie: `function getBodyStyle(input){return input}`
//
//
//     - For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
//
//
//     - The user should be able to enter their
//     - Body style (2D, 4D, etc)
//     - Vehicle type (sports car, sedan, compact, truck, etc)
//     - Vehicle color
//
//
//     - Each switch statement should confirm the user's choice in a logging statement
//
//
//     - The point of this is to validate what the user enters.
//     - If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
//         ie: default: `"error: " + vehicleType + " not recognized"`;
//         - If this occurs, call the related function again (see: recursion) until the user enters a correct choice
//         - HINT: a way you can check for errors is to see if the string contains the word "error"
//
//
//         - After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user