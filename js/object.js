(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: "Matthew ",
        lastName: "Lorber",
        sayhello: "Hello from "
    }
    console.log(person.firstName)
    console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayhello + person.firstName + person.lastName + "!")

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    const discountLevel = 200;
    const discount = 0.12;

    shoppers.forEach((shopper) => {
        let totalAmount = shopper.amount;
        let discountAmount = 0;

        if (totalAmount > discountLevel) {
            discountAmount = totalAmount * discount;
            totalAmount -= discountAmount;
        }
        console.log(`${shopper.name} spent $${shopper.amount}, and ${discountAmount ? `got a discount of $${discountAmount} (${discount * 100}%). ` : "did not get a discount. "}Total amount to pay: $${totalAmount}.`);
    });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [
        {
            title: "I, Jedi",
            author: {
                firstName: "Kevin J. ",
                lastName: "Anderson"
            }
        },
        {
            title: "Heir to the Empire",
            author: {
                firstName: "Timothy ",
                lastName:  "Zahn"
            }
        },
        {
            title: "Rogue Squadron: Xwing",
            author: {
                firstName: "Michael A. ",
                lastName: " Stackpole"
            }
        },
        {
            title: "Dark Force Rising",
            author: {
                firstName: "Timothy ",
                lastName: "Zahn"
            }
        },
        { title: "Dune",
            author: {
        firstName: "Frank ",
                lastName: "Herbert",
        }
        },
    ]


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(books, index){
        console.log(`Book ${index + 1} \n Title: ${books.title} \n Author: ${books.author.firstName}${books.author.lastName}`)
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorName) {
        const [authorFirstName, authorLastName] = authorName.split(' ', 2);
        const book = {
            title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName,
            },
        };
        return book;
    }

console.log(createBook("Dune", 'Frank Herbert'));

})();