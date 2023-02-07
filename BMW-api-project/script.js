const app = {};

app.init = () => {
    console.log('Ready to go!')
}

app.apiKey = 'https://api.nytimes.com/svc/books/v3/lists.json';

$(() => {
    app.init();
})

// Select a category of books, and see the latest best sellers in that category.
app.getBookCategoryList = () => {
    const bestSeller = $.ajax({
        url: `${app.apiKey}?list`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.apiKey
        }
    });
    return bestSeller;
}

app.reviewBaseUrl = `https://api.nytimes.com/svc/books/v3/reviews.json`;

// Display the author, and a very brief description of the book.
app.getBookReviews = () => {
    const reviews = $.ajax({
        url: `${app.reviewBaseUrl}?isbn`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.reviewBaseUrl
        }
    });
    return reviews;
}
