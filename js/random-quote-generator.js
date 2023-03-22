// script.js

// Load quotes from external JSON file
fetch('/data/quotes.json')
    .then(response => response.json())
    .then(data => {
        quotes = data;
    });

// Generate a random quote and image
function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = quote.text;
    const quoteAuthor = quote.author;
    const quoteImage = quote.image;

    const quoteHtml = `
    <img src="${quoteImage}" alt="${quoteAuthor}">
    <p>${quoteText}</p>
    <cite>${quoteAuthor}</cite>
  `;

    document.getElementById('quote').innerHTML = quoteHtml;
}
