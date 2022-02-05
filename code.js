let quotesFile = 'https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json';

let request = new XMLHttpRequest();

request.open('GET', quotesFile);
request.responseType = 'json';
request.send();

let quotes;

request.onload = function(){
    quotes = request.response;
    console.log(quotes);
    loaded();
};

const buttonQuote = document.querySelector('.button-quote');
const jackie = document.querySelector('#img-container');
const text = document.querySelector('.main-container .quote');
const author = document.querySelector('.main-container .author');
const myHtml = document.querySelector('html');
let colors = ['black', 'green', 'blue', 'red', 'purple', 'cornflowerblue', 'violet', 'chocolate', 'dimgray', 'brown', 'darkkhaki'];

function loaded() {
    let x = Math.floor(Math.random() * 100);
    text.innerHTML = quotes[x]["text"];
    author.innerHTML = quotes[x]["author"];
}

buttonQuote.addEventListener('click', function (){
    let current = myHtml.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * 11)];
    while(current === newColor){
        newColor = colors[Math.floor(Math.random() * 11)];
    }
    myHtml.style.backgroundColor = newColor;
    jackie.setAttribute('class', 'img-container');
    let x = Math.floor(Math.random() * 100);
    text.innerHTML = quotes[x]["text"];
    author.innerHTML = quotes[x]["author"];
    setTimeout(stopAnimation, 700);
});

function stopAnimation(){
    jackie.removeAttribute('class');
}

