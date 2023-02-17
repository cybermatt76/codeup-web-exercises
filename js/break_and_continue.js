

// while (true) {
//     var oddNumber = prompt("Please enter an odd number between 1 and 50:");
//     oddNumber = parseInt(oddNumber);
//
//     if (oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 == 0) {
//         break;
//     }
//     alert("Invalid input. Please enter an odd number between 1 and 50.");
//
// }

// while (true) {
//     const oddNumber = parseInt(prompt("Enter an odd number between 1 and 50: "));
//     if (oddNumber % 2 === 0 && oddNumber > 50) {
//         alert("Please enter an odd number under 50.");
//     } else {
//         for (let i = 1; i <= oddNumber; i += 2) {
//             if (i === oddNumber) {
//                 console.log("Yikes! Skipping number:" + oddNumber);
//                 continue;
//             }
//             console.log("Here is an odd number: " + i);
//         }
//     }
// }
// while (true) {
//     var number = prompt("Please enter an odd number between 1 and 50:");
//     number = parseInt(number);
//
//     if (number >= 1 && number <= 50 && number % 2 !== 0) {
//         break;
//     }
//     alert("Invalid input. Please enter an odd number between 1 and 50.");
// }
//
// console.log("Number to skip is: " + number);
//
// for (var p = 1; p <= 50; p += 2) {
//     if (p === number) {
//         console.log("Yikes! Skipping number: " + number);
//         continue;
//     }
//     console.log("Here is an odd number: " + p);
// }

// (() => {
//
//     let userPrompt;
//     let userPromptNum;
//     while(true){ // this is dangerous
//         userPrompt = prompt("Pleaes enter a number between 1 and 50.");
//         userPromptNum = parseInt(userPrompt);
//         if(userPromptNum % 2 !== 1 && !(userPromptNum >= 1) && !(userPromptNum <=50)){
//             break;
//         }
//     }
//
//     for(let i = 1; i <= 49; i = i + 2) {
//         if (i = userPromptNum) {
//             console.log(`Yikes! Skipping number: ${i}`);
//             continue
//         }
//         console.log(`Here is an odd number: ${i}`);
//     }
//
// })()

