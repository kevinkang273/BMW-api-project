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

app.getBookReviews = () => {
    const reviews = $.ajax({
        url: `${app.apiKey}/reviews.json`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.apiKey
        }
    });
    return reviews;
}

app.getDate = () => {
    const dates = $.ajax({
        url: `${app.apiKey}/list/YYYY/MM/DD`,
        method: 'GET',
        dataType: 'json',
        data: {
            apiKey: app.apiKey
        }
    })
}

app.setBook = () => {
    const allBookDetails = app.getBookDetails();

    allBookDetails.then(res => {
        const date = res.results.published_date;
    })
}