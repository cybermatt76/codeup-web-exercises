"Use Strict"

function negativeinput(input) {
    if (isNaN(parseFloat(input))){
        return "that is not a number"
    } else if (input > 0) {
        return -input;
    } else {
        return input;
    }
}

let flavor = prompt ("Welcome to Codeup ice Cream! What flavor do you want?");
//
// if (flavor === "chocolate") {
//     alert("One chocolate coming right up");
// } else if  (flavor === "vanilla");
// } else {
//         alert("We don't have that flavor, sorry.");
// }

switch(flavor.toLowerCase()) {
    case "chocolate":
        alert("One chocolate coming right up.");
        break;
    case "vanilla":
        alert("One vanilla coming right up")
        break;
    case "strawberry":
        alert("One strawberry coming right up")
    default:
        alert("We do not have that flavor, sorry.")
}

function serveIceCream(flavor){
    if(flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
        alert(`One ${flavor} Coming right up`);
    } else {
        alert("We dont have that flavor, sorry.");
    }
}

serveIceCream(prompt("Welcome to Codeup Ice Cream! What flavor do you want?").tolowercase());


const divisible = (dividend, divisor) => {
    dividend % divisor ===0 ? `Divisible by ${divisor}` : `Not divisible by ${divisor}!`;
}