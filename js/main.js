console.log("Up and Running");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again!");
};