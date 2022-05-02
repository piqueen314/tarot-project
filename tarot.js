const tarotCards = [1,2,3,4,5,6,7,8,9,10];
let shuffledDeck = [];
let yourCards = [];

//Shuffle the deck (from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array): 

function shuffle(deck) {
    let currentIndex = deck.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
    shuffledDeck = deck;
    return deck;
}

//Draw 3 cards and set orientation:
function drawCards() {
    for (let i = 0; i < 3; i++) {
        let card = shuffledDeck.shift();
        let orientation = (Math.floor(Math.random() * 2));
        if (orientation === 0) {
            card = card + 'U';
        }
        yourCards.push(card);
    }
    return yourCards;
}

//tests:

console.log(shuffle(tarotCards)); //outputs shuffled deck
console.log(drawCards()); //outputs drawn cards and orientation
console.log(shuffledDeck) //outputs remaining deck
