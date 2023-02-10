"use strict";

console.log("Hello from external javascript!");

alert("Welcome to my website!")

let userInput = prompt("What is your favorite Color?");

alert("Great, " + userInput + " is my favorite color too!");
let priceinput = prompt( "How much do movies cost per day?")
let ppd = parseFloat(priceinput)
let tlm = prompt("How many days did you keep The Little Mermaid?");
let bb = prompt("How many days did you keep Brother Bear?");
let herc = prompt("How many days did you keep Hercules?");
let paymentdue = ((tlm * ppd) + (bb * ppd) + (herc * ppd));
alert("Please pay Blockbuster " + paymentdue + " dollars.");

let googlepay = parseFloat(prompt("How much does Google pay per hour"));
let Google = googlepay * parseFloat(prompt("How many hours did you work for Google this week?"));
let amazonpay = parseFloat(prompt ("How much does Amazon pay per hour"));
let Amazon = amazonpay * parseFloat(prompt( "How many hours did you work for Amazon this week?"));
let facebookpay = parseFloat(prompt("How much does Facebook pay per hour"));
let Facebook = facebookpay * parseFloat(prompt("How many hours did you work for Facebook this week?"));

let paycheck = Google + Amazon + Facebook;

alert("You earned $" + paycheck + " this week!");


let scheduleconflicts = false
let maxClassSize = parseInt(prompt ("What is the maximum class size for this class?"));
let currentClassSize = prompt ("What is the current class size?");
let canEnroll = !scheduleconflicts && (currentClassSize < maxClassSize);
alert( "It is " + canEnroll + " in class")


let minCartSize = 2;
let cartSize = parseInt(prompt ("How many items are in your cart?"));
let productexpiration = confirm(" Is your offer expired?");
let premiumMember = confirm( "Are you a premium member?");

let canOfferApply = (premiumMember || (cartSize >= minCartSize) && !productexpiration);
alert( "It is " + canOfferApply + " that the offer applies");







