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
    <div class="row">
        <div class="image-wrapper">
            <img src="${quoteImage}" alt="${quoteAuthor}">
        </div>
        <div class="column">
            <div class="the-quote">
                <p>${quoteText}</p>
            </div>
            <div class = "cite-wrapper">
                <cite>${quoteAuthor}</cite>
            </div>
        </div>
    </div>
  `;

    document.getElementById('quote').innerHTML = quoteHtml;
}
