let fruits = ["bananas", "apples", "oranges", "mangos", "tomatoes"];

// let var1 = fruits[2];
// console.log(var1);
//
// let numberOfFruits = fruits.length
// console.log(`The number of fruits =>`, numberOfFruits);
//
// let fruitsString = fruits.toString();
// console.log(`Using toString() on fruits =>`, fruitsString)
//
// //let fruitsslipper = fruits
//
// let fruitsAndNumbers = ["bananas", 2, "apples", 32, undefined];
// console.log(fruitsAndNumbers)
//
// const returnString = (input) => {
//     return input;
// }
//
// let stringsList = [returnString("Jason"), returnString("Javier"), returnString("Justin")];
// console.log('stringslist follows => ', stringsList);

// for(let i = 0; i < fruits.length; i++){
//     let fruit = fruits[i]
//     console.log(fruit)
// }

// or

// for(let i = 1; i < fruits.length; i++){
//     let fruit = fruits[i - 1]
//     console.log(fruit)
// }

// fruits.forEach(function(element,index, array){
//     console.log("The elements follows:", element)
//     console.log("The index follows:", index)
//     console.log("The array follows", array)
// });

// fruits.forEach((element,index, array) =>{
//     console.log("The elements follows:", element)
//     console.log("The index follows:", index)
//     console.log("The array follows", array)
// });
// for(let i = 0; i < fruits.length; i++){
//     let fruit = fruits[i];
//     console.log(fruits)
// }
// let favFruits = [];
// fruits.forEach((fruit,index, array) =>{
//     if (fruit === "apples" || fruit === "tomatoes") {
//         favFruits.push(fruit);
//     }
// });
// console.log(favFruits)

let studentSeating = [
    ["Cynthia", "Marc", "Yamba", "Kelvyn", "Nick", "Jared",]
    ["Sarah", "Joe", "Matthew", "Randy", "Quintyn", "Kaeden", "Damian"],
];

studentSeating.forEach((row)=>{
    row.forEach((student )=>{
        console.log(student);
    });
});