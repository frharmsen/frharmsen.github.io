/**
 * Main logic of this utility.
 * 
 * Requires card.js, deck.js and hand.js.
 */
"use strict";
const CARDS_TO_DEAL = 5;
const WAITING_FOR_DRAW = 0;
const WAITING_FOR_DEAL = 1;
const WINNINGS_VALUES = [ 0.0, 10.0, 20.0, 30.0, 40.0, 60.0, 90.0, 250.0, 500.0,
	8000.0 ];
var deck;
var hand;
var balance = 990;
var state = WAITING_FOR_DRAW;

function clearResult(result) {
	var resultSpanElement = document.getElementById("result");
	var textNode = resultSpanElement.firstChild;
	if (textNode) {
		resultSpanElement.removeChild(textNode);
	}
}

function showResult(result) {
	var resultSpanElement = document.getElementById("result");
	var textNode = document.createTextNode(Hand.WINNINGS_STRINGS[result]);
	resultSpanElement.appendChild(textNode);
}

function showNewBalance(change) {
	var balanceSpanElement = document.getElementById("balance");
	var textNode;

	if (balanceSpanElement.firstChild) {
		balanceSpanElement.removeChild(balanceSpanElement.firstChild);
	}
	balance += change;
	textNode = document.createTextNode(balance.toFixed(2));
	balanceSpanElement.appendChild(textNode);
}

function setKeepTextHidden(hidden) {
	var keepTextElement;
	var style = hidden ? "hidden" : "visible";

	for (var i = 1; i <= 5; i += 1) {
		keepTextElement = document.getElementById("keep" + i.toString());
		keepTextElement.style.visibility = style;
	}
}

function refreshKeepText(hidden) {
	var keepColumnElement;
	var style = hidden ? "hidden" : "visible";

	for (var i = 1; i <= 5; i += 1) {
		keepColumnElement = document.getElementById("keep" + i.toString());
		if (keepColumnElement.firstChild.data = "KEEP") {
			keepColumnElement.removeChild(keepColumnElement.firstChild);
			keepColumnElement.appendChild(document.createTextNode("DISCARD"));
		}
	}
}

function updateCard(event) {
	var cardNumber = Number(event.target.id.charAt(event.target.id.length - 1));
	var keepColumnElement = document.getElementById('keep'
			+ cardNumber.toString());
	var keepText;

	try {
		cardNumber -= 1;
		if (hand.cards[cardNumber].kept) {
			hand.cards[cardNumber].kept = false;
			keepColumnElement.removeChild(keepColumnElement.firstChild);
			keepColumnElement.appendChild(document.createTextNode("DISCARD"));
		} else {
			hand.cards[cardNumber].kept = true;
			keepColumnElement.removeChild(keepColumnElement.firstChild);
			keepColumnElement.appendChild(document.createTextNode("KEEP"));
		}
	} catch (exception) {
		console.log(exception);
	}

	event.preventDefault();
	return false;
}

function updateSubmitButton(label) {
	var submitButtonElement = document.getElementById("submitButton");
	submitButtonElement.value = label;
}

function showHand() {
	var imageElement;

	for (var i = 0; i < 5; i += 1) {
		imageElement = document.getElementById("card" + (i + 1));
		imageElement.setAttribute("src", "images/" + hand.cards[i].rank
				+ hand.cards[i].suit + ".png");
	}
}

function dealCards() {
	console.log("entering dealCards")
	deck.returnCardsToDeck();
	deck.shuffle();
	hand = Hand.deal(deck, CARDS_TO_DEAL);
	hand.sort();
	showHand();
	updateSubmitButton("DRAW");
	setKeepTextHidden(false);
	showNewBalance(-10);
	clearResult();
	console.log("exiting dealCards");
}

function drawCards() {
	var result;

	console.log("entering drawCards");
	hand.drawCards(deck);
	hand.sort();
	showHand();
	result = hand.getWinnings();
	showResult(result);
	showNewBalance(WINNINGS_VALUES[result]);
	updateSubmitButton("DEAL");
	setKeepTextHidden(true);
	refreshKeepText();
	console.log("exiting drawCards");
}

function updateHand(event) {
	try {
		if (state === WAITING_FOR_DRAW) {
			drawCards();
			state = WAITING_FOR_DEAL;
		} else {
			dealCards();
			state = WAITING_FOR_DRAW;
		}
	} catch (exception) {
		console.log(exception);
	}

	event.preventDefault();
	return false;
}

function init() {
	var submitButtonElement = document.getElementById("submitButton");
	var cardButtonElement;

	deck = new Deck();
	dealCards();
	submitButtonElement.addEventListener("click", updateHand);
	for (var i = 0; i < 5; i += 1) {
		cardButtonElement = document.getElementById("cardButton" + (i + 1));
		cardButtonElement.addEventListener("click", updateCard);
	}
}

window.addEventListener("load", init);