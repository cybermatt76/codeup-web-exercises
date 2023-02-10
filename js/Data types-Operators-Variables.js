// var a = 1;
// var b = a++;
// var c = ++a;
// what is the value of a, b, and c?

// undefined

// var d = "hello";
// var e = false;
//
// d++;
// e++;
// 0

// var perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
//
// console.log(perplexed + 2)

// var price = 2.7;
// price.toFixed(2);

//console.log(isNaN(0))

//console.log(isNaN(1))

//console.log(isNaN(""))

//console.log(isNaN("string"))

//console.log(isNaN("0"))

//console.log(isNaN("1"))

//isNaN("3.145")
//false
//console.log(isNaN(Number.MAX_VALUE))

isNaN(Infinity)
//false

isNaN("true")
//true

//console.log(isNaN(true))
//false

isNaN("false")
//true
isNaN(false)
//false

// to illustrate why the isNaN() function is needed:
//NaN == NaN

//!true
//false

//!false
//true

//!!true
//true

//!!false
//false

//!!0
//false

//!!-0
//false

//!!1
//true

//!!-1
//true

//!!0.1
//true

//!!"hello"
//true

//!!""
//false

//!!''
//false

//!!"false"
//true

//!!"0"
//true

//let sample = "Hello Codeup";

//console.log(sample.toUpperCase());

//let sample = sample + "St
//console.log(sample.indexOf("c"));

//let sample = "Hello Codeup Class"

//console.log(sample.substring(5, 12));

let lm = 3
let bb = 5
let hrk = 1
let payment = ((lm + bb + hrk) * 3)
//console.log(payment)

let google = 400
let aws = 380
let Facebook = 350
let takehome = ((google * 6) + (aws * 4) + (Facebook *10))
//console.log(takehome)

let sheduleconflicts = false
let maxClassSize = 30;
let currentClassSize = 24;

let canEnroll = !sheduleconflicts && (currentClassSize < maxClassSize);


let minCartSize = 2;
let cartSize = 3
let productexpiration = false;
let premiumMember = false;

let canOfferApply = (premiumMember || (cartSize >= minCartSize) && !productexpiration;

let username = 'codeup';
let password = 'notastrongpassword';
let minlength = (password) => password.length >=5;
let nousernamepassword = (username, password) => !password.includes(username);
let usernamelength = username = username.length <= 20;
let userLength = username.length;
let passLength = password.length;
let firstCharUser = username.substring(0,1);
let lastCharUser = username.substring((userLength -1), userLength);
let firstCharPass = username.substring(0,1);
let lastCharPass = username.substring((passLength -1), passLength);

let hasWhiteSpace = firstCharUser === ' ' || lastCharUser ' ' === || firstCharUser ' ' === || lastCharPass ' ' || firstCharPass ' '








