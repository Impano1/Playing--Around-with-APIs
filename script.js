const quoteText = document.querySelector('#quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateButton = document.getElementById('generate-button');

//generateButton.addEventListener('click', fetchQuote);


let impano = fetch('https://type.fit/api/quotes')


generateButton.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 16)
    quoteText.textContent = impano.then(data => {
        return data.json()
    }).then(data => {
        return data[0].text
    })
})
