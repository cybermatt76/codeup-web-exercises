function formatToLocaleString(number, language='en', country='US', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

function isNumericOrNumericString(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean";
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayOfRandomNumbers(lengthOfArray) {
    const array = [];
    for (let i = 0; i < lengthOfArray; i++) {
        let newRandomNumber = randomNumber(1, lengthOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, lengthOfArray + 100);
        }
        array.push(newRandomNumber);
    }
    return array
}