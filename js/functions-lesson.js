"use strict";
//
// // traditional method
// // function helloWorld(){
// //     alert("Hello World!")
// // }
//
// // const helloWorld = (name) => {
// //     let message = `Hello ${name}!`
// //     return message;
// // }
// //
// // let firsthello = helloWorld("jason");
// // console.log(firsthello);
// // let secondhello = helloWorld("Javier");
// // alert(secondhello)
// //
// // let message:
// // const highFive = (name1, name2) => {
// //     let message `${name1} gives ${name2} a high five`
// //     return message
// // }
//
// const isEven = (num) => {
//     let result = num % 2 === 0;
//     return result
// }
//
// let students = 24;
// let evenStudents = isEven(students)
//
// //IIFE (Immediatly-invoked Function Expression) arrow function
//     (() => {
//
//     })();
//
// (function() => {
//
// })();
//
// function myname(fn, ln) {
//     fn = "Matthew";
//     ln = " Lorber";
//     return fn + ln
// }

//console.log("My name is " + myname())

function negativeNumber (num) {
    return num > 0 ? -num : num;
}

console.log(negativeNumber(34))