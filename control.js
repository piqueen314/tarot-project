import {cards} from './cards.js';

let button =document.getElementsByTagName("button");
let placeHolderBox = document.getElementById("place-holder-cards")
let displayCard1 = document.getElementById("card-1-img");
let displayCard2 = document.getElementById("card-2-img");
let displayCard3 = document.getElementById("card-3-img");
let titleCard1 = document.getElementById('card-1-title');
let titleCard2 = document.getElementById('card-2-title');
let titleCard3 = document.getElementById('card-3-title');
function getRandomCard (cards){
    const randIndex = Math.floor(Math.random()* cards.length)
    return cards[randIndex];
}
function onMouseOver () {
    button[0].style.backgroundColor = '#3CBCC3';
}
function onMouseOut () {
    button[0].style.backgroundColor = '#E40C2B';
}
function onClick (){
    button[0].textContent = 'Draw Cards Again'
    placeHolderBox.style.display = 'none'
    let card = getRandomCard(cards);
    displayCard1.src = card.img;
    titleCard1.innerText = card.name;
    card = getRandomCard(cards);
    titleCard2.innerText = card.name;
    displayCard2.src = card.img;
    card = getRandomCard(cards);
    titleCard3.innerText = card.name;
    displayCard3.src = card.img;

}
button[0].addEventListener('mouseover', onMouseOver );
button[0].addEventListener('mouseout', onMouseOut );      
button[0].addEventListener('click', onClick ); 