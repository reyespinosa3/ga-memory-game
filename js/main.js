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
checkForMatch = function() {
	if (cardsInPlay === cards.length && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again!");
	};
};
flipCard = function(cardId) {
	console.log("User flipped " + cardId.rank);
	cardsInPlay.push(cards.rank);
	console.log(cardId.suit);
	console.log(cardId.cardImage);
	checkForMatch();
};
flipCard(cards[0]);
flipCard(cards[2]);