// this sets the kelvin temperature at 293
let kelvin = 0
//converts kelvin temp to celcius
let celsius = (kelvin - 273)
//converts celcius to fahrenheit
let fahrenheit = (celsius * (9/5) + 32)
// and rounds down
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)