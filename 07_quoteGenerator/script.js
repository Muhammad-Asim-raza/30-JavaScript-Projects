const quote = document.getElementById("Quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes/random";

async function geturl(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}
geturl(api_url);
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "....by " + quote.author, "Twitter window",
        "width=600, height=300"
    )
}