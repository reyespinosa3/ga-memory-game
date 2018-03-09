console.log("Up and Running");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var score = 0;
var flippedCards = document.getElementsByClassName('flipped');

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score += 1;
		document.getElementById('score').textContent = score;
	} else {
		alert("Sorry, try again!");
	}
};

var flipCard = function() {
		var cardId = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardId].cardImage);
		this.setAttribute('class', 'flipped');
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		if (cardsInPlay.length == 2) {
			checkForMatch();
			cardsInPlay = [];
		}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('gameboard').appendChild(cardElement);
}
};

var resetBoard = function() {
	for (i = 0; i < flippedCards.length; i++) {
		flippedCards[i].setAttribute('src', "images/back.png");
		score = 0;
		document.getElementById('score').textContent = 0;
	}
	for (var i = cards.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = cards[i];
		cards[i] = cards[j];
		cards[j] = temp;
	}
};
createBoard();