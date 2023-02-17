"use strict"

// while (true) {
//     console.log('IT\'S STILL TRUE');
//     i++;
//
// }

// let i = 1;
// while (i <= 10) {
//     console.log(`Loop #${i}`);
//     i++
// }

// let i = 1;
// do {
//     console.log(`Loop #${i}`);
//     i++
// }
// while (i <= 10)

// for (let i = 1; i <= 10; i++) {
//     console.log(`loop #${i}`);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let number = 5;
// let factorial = 1;
//
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }
//
// console.log(factorial); // Output: 120

// const height = 5;
// let pyramid = "";
//
// for (let i = 1; i <= height; i++) {
//     for (let j = 1; j <= height - i; j++) {
//         pyramid += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         pyramid += "*";
//     }
//     pyramid += "\n";
// }
//
// console.log(pyramid);

const height = 5;
let pyramid = "";

for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= height - i; j++) {
        pyramid += "  ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        pyramid += "*  ";
    }
    pyramid += "\n";
}

console.log(pyramid);

// const buildPyramid = (rows) => {
//     //loop through rows
//     for (let i = 1; i <= rows; i++) {
//         let row = "";
//         for (let j = 1; j <= rows; i++){
//         }
//     }
// }

