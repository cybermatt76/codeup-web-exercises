alert("Welcome to my website!")

let userInput = prompt("What is your favorite Color?");

alert("Great, " + userInput + " is my favorite color too!");

let tlm = prompt("How many days did you keep The Little Mermaid?");
let bb = prompt("How many days did you keep Brother Bear?");
let herc = prompt("How many days did you keep Hercules?");
let paymentdue = ((tlm *3) + (bb *3) + (herc * 3));
alert("Please pay Blockbuster " + paymentdue + " dollars.");

let Google = 400 * prompt("How many hours did you work for Google this week?");
let Amazon = 380 * prompt( "How many hours did you work for Amazon this week?");
let Facebook = 350 * prompt("How many hours did you work for Facebook this week?");

let paycheck = Google + Amazon + Facebook;

alert("You earned $" + paycheck + " this week!");


let scheduleconflicts = false
let maxClassSize = prompt ("What is the maximum class size for this class?");
let currentClassSize = prompt ("What is the current class size?");
let canEnroll = !scheduleconflicts && (currentClassSize < maxClassSize);
alert(canEnroll)


let minCartSize = 2;
let cartSize = prompt ("How many items are in your cart?");
let productexpiration = confirm(" Is your offer expired?");
let premiumMember = confirm( "Are you a premium member?");

let canOfferApply = (premiumMember || (cartSize >= minCartSize) && !productexpiration)
alert(canOfferApply)







