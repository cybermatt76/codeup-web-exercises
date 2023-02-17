"Use strict"

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// const myName = "Jason";
// const sPosition = myName.indexOf('s');
// console.log(sPosition);

// const thursday = daysOfWeek.indexOf("Thursday");
// console.log(thursday);

// const removeSunday = daysOfWeek.pop();
// console.log(daysOfWeek);
// console.log(removelast);

// const removeFirst = daysOfWeek.shift()
// console.log(daysOfWeek);
// console.log(removeFirst);

////SLICING
// const firstHalf = daysOfWeek.slice(0,3)
// console.log(daysOfWeek)
// console.log(firstHalf)

//removing an item in the middle
// const indexOfThursday = daysOfWeek.indexOf("Thursday");
// // console.log(daysOfWeek);
// // const lastHalf = daysOfWeek.slice(indexOfThursday + 1);
// // console.log(lastHalf);
// // daysOfWeek = daysOfWeek.slice(0, indexOfThursday).join(',');
// // console.log(daysOfWeek);
// // daysOfWeek += lastHalf.join(',');
// // console.log(daysOfWeek);
// // daysOfWeek = daysOfWeek.split(',');
// // console.log(daysOfWeek);


//SPREAD OPERATOR
daysOfWeek = [
    ...daysOfWeek,
    ...lastHalf,
    "Merrellday"
]

const removeDay = daysOfWeek.splice(indexOfThursday, 1);
console.log(daysOfWeek)
console.log(removeDay.join())




