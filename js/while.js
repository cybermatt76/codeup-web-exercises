"use strict"

// let whilenumber = 2;
// for (let i = 1; i <= 16; i++) {
//     console.log(whilenumber);
//     whilenumber *= 2;
// }

// let whilenumber = 2;
// let t = 1;
//
// while (t <= 16) {
//     console.log(whilenumber);
//     whilenumber *= 2;
//     t++;
// }

//Generates a random number between 50 and 100
let totalCones = Math.floor(Math.random() * 51) +50;

//stars the variable for the number of cones sold
let conesSold = 0;

do {
    //Generate a random number between 1 and 5 representing the number of cones sold to a customer
    var conesToBuy = Math.floor(Math.round() *5) +1;

    //Check if there are enough cones left to sell
    if (conesToBuy <= totalCones) {
        //Sell the cones to the customer
        totalCones -= conesToBuy;
        conesSold += conesToBuy;
        console.log(`We sold ${conesToBuy} cones!`);

    } else {
        //tell the customer there are not enough cones left to fill the order
        console.log(`Sorry, we can't sell ${conesToBuy} cones, there are only ${totalCones} remaining`)
    }
} while (totalCones > 0);

console.log("Sold out! " + conesSold + " cones sold.");