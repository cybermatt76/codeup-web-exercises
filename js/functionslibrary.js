"use strict";



// 1.
function isGreaterThan (input1, input2) {
    return input1 > input2
}


// 2.
// function isLessThan (input1, input2) {
//     const parsedInput1 = parseInt(input1,10)
//     const parsedInput2 = parseInt(input2, 10)
//     return parsedInput1 < parsedInput2
// }

function isLessThan(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    return num1 < num2;
}


// 3.
// function isEqualNumber (input1, input2) {
//     const parsedInputA = parseInt(input1, 10)
//     const parsedInputB = parseInt(input2, 10)
//     return parsedInputA === parsedInputB;
// }

// function isEqualNumber(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return false;
//     }
//     return num1 === num2;
// }

    // function isEqualNumber (num1, num2) {
    //     return (typeof num1 === 'number' && typeof num2 === 'number') ? num1 === num2 : false;
    // }

function isEqualNumber(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 === num2;
}

//4.

// function isEqual (input1, input2) {
//     return input1 === input2;
// }

// function isEqual(value1, value2) {
//     return Object.is(value1, value2);
// }

function isEqual(value1, value2) {
    if (typeof value1 !== typeof value2) {
        return false;
    }
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }
    return value1 === value2;
}

//5.

// function isNot (input1) {
//     if (input1 === null) {
//         return false
//     }
//     return !input1;
// }

// function isNot(value) {
//     if (typeof value !== 'boolean') {
//         return false;
//     }
//     return !value;
// }

function isNot(value) {
    return typeof value === 'boolean' ? !value : false;
}

// function calcAbs (input1) {
//     const calcAbsinput = parseFloat(input1, 10);
//         return Math.abs(calcAbsinput)
//     }

function calcAbs(num) {
    if (num === null || isNaN(num)) {
        return 0;
    }
    return Math.abs(num);
}

// function calcCube (input1) {
//     const calcCubeinput = parseFloat(input1, 10);
// }

// function calcCube(num) {
//     if (num === null || isNaN(num)) {
//         return 0;
//     }
//     return Math.pow(num, 3);
// }

const calcCube = (num) => {
    if (num === null || isNaN(num)) {
        return 0;
    } else {
        return num ** 3;
    }
};


// function isTypeMatch (input1, input2) {
//     return input1 == input2;
// }

// function isTypeMatch(arg1, arg2) {
//     if (arg1 === null || arg2 === null) {
//         return false;
//     }
//     return typeof arg1 === typeof arg2;
// }

function isTypeMatch(arg1, arg2) {
    return (arg1 === null || arg2 === null) ? false : typeof arg1 === typeof arg2;
}

// function findLongestString(str1, str2) {
//     if (typeof str1 !== 'string' && typeof str2 !== 'string') {
//         return '';
//     } else if (typeof str1 !== 'string') {
//         return str2;
//     } else if (typeof str2 !== 'string') {
//         return str1;
//     } else {
//         return str1.length > str2.length ? str1 : str2;
//     }
// }

function findLongestString(str1, str2) {
    return (typeof str1 === "string" && typeof str2 === "string") ? (str1.length >= str2.length ? str1 : str2) : (typeof str1 === "string" ? str1 : (typeof str2 === "string" ? str2 : ""));
}

function isFactor(num1, num2) {
    if (num1 === null || num2 === null || isNaN(num1) || isNaN(num2) || num1 === 0) {
        return false;
    }
    return num2 % num1 === 0;
}

// function isFactor(num1, num2) {
//     return (num1 !== null && num2 !== null && !isNaN(num1) && !isNaN(num2) && num1 !== 0) ? (num2 % num1 === 0) : false;
// }

