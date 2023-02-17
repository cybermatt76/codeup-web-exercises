"use strict"
console.log('Runing for_loops.js')
function ShowMultiplicationTable (num) {
    for (let i =1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num  * i}`);
    }
}
console.log(ShowMultiplicationTable(6))



// (() => {
//
//     const ShowMultiplicationTable = (number) => {
//         let table = '';
//         ///THIS IS WHERE WE MAKE OUR MONEY
//         for(let i=1; 1 <= 10; i++) {
//             //console.log(i)
//             let daMath = parseInt(number) * i;
//             let output = `${number} x ${i} = ${daMath}\n`;
//         }
//         return
//     }
//     let sevenTable = ShowMultiplicationTable(7)
//     console.log(sevenTable)
// })()

for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 181) + 20;
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`);
    } else {
        console.log(`${randomNumber} is odd`);
    }
}

let i = 1;
while (i <= 10) {
    let randomNumber = Math.floor(Math.random() * 181) + 20; // generate a random number between 20 and 200
    console.log(`${randomNumber} is ${randomNumber % 2 === 0 ? 'even' : 'odd'}`);
    i++;
}


// function createPyramid(rows)
// {
//     for (let i = 0; i < rows; i++) {
//         var output = '';
//         for (let j =0; j < rows - i; j++) output += ' ';
//         for (let k = 0; k <= i; k++) output += '* ';
//         console.log(output);
//     }
// }
//
// createPyramid(5) // pass number as row of pyramid you want.
//
// function createPyramid(rows)
// {
//     for (let i = 0; i < rows; i++) {
//         var output = '';
//         for (let j =0; j < rows - i; j++) output += ' ';
//         for (let k = 0; k <= i; k++) output += '* ';
//         console.log(output);
//     }
// }
//
// createPyramid(5) // pass number as row of pyramid you want.

for(let i = 0; i < 9; i++){
    let output = `${i+1}`;
    //Loop again with i as my declaration, condition is >= 0. decrement
    for(let j = i; j > 0; j--) {
        let moNumbers = `${i+1}`;
        output += moNumbers
    }
    console.log
}

// for (let i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i));
// }

function generatePyramid() {
    let totalNumberofRows = 9;
    let output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '';
        }
        console.log(output);
        output = '';
    }
}
generatePyramid();

for (let l = 100; l> 0; l-=5){ console.log(l); }

