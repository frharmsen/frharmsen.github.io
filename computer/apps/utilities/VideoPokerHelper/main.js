/**
 * Main logic of this utility.
 * 
 * Requires card.js, deck.js and hand.js.
 * 
 * TODO: add logic for handling bad input entry.
 */
"use strict";
var deck;
var hand;

/*
 * Keep 5 cards if the hand is a royal flush, straight flush, 4 of a kind, full
 * house, flush, or straight.
 */
function get5CardsToKeep() {
	if (hand.isRoyalFlush(hand) || hand.isStraightFlush(hand) || hand.isFourOfAKind(hand)
			|| hand.isFullHouse(hand) || hand.isFlush(hand) || hand.isStraight(hand)) {
		console.log("get5CardsToKeep() = " + hand.cards);
		return hand.cards;
	}

	console.log("get5CardsToKeep() = null");
	return null;
};

function isStraightDraw(cards) {
	if ((cards[cards.length - 1].order - cards[0].order) <= 5) {
		return true;
	}

	if ((cards[0].rank == "2") && (cards[cards.length - 1].rank == "A")
			&& ((cards[cards.length - 2].order - cards[0].order) <= 5)) {
		return true;
	}

	return false;
}

function getTwoPair() {
	var groups = hand.groupCardsByRank();
	var pairsReturned = [];

	for ( var rank in groups) {
		if (groups[rank].length == 2) {
			pairsReturned.push(groups[rank][0]);
			pairsReturned.push(groups[rank][1]);
		}
	}

	console.log("pairsReturned() = " + pairsReturned);
	return pairsReturned;
};

/*
 * Keep 4 cards if the hand is a straight flush draw without face card remaining
 * and the straight flush has no face cards or the hand is two pair.
 */
function get4CardsToKeep() {
	var groups;
	var straightReturned = [];
	var unmatchedCard;
	var pairs;

	if (hand.isTwoPair()) {
		pairs = getTwoPair()
		console.log("get4CardsToKeep() = " + pairs);
		return pairs;
	}

	groups = hand.groupCardsBySuit();
	for ( var suit in groups) {
		if (groups[suit].length == 1) {
			unmatchedCard = groups[suit][0];
		}
		if (groups[suit].length == 4) {
			groups[suit].sort(function(card1, card2) {
				return card1.order - card2.order;
			});
			if (isStraightDraw(groups[suit])) {
				straightReturned.push(groups[suit][0]);
				straightReturned.push(groups[suit][1]);
				straightReturned.push(groups[suit][2]);
				straightReturned.push(groups[suit][3]);
			}
		}
	}

	if (straightReturned.length == 4) {
		console.log("straightReturned = " + straightReturned);
		console.log("straightReturned[3].order = " + straightReturned[3].order);
		console.log("unmatchedCard = " + unmatchedCard);
		console.log("unmatchedCard.order = " + unmatchedCard.order);
		if ((straightReturned[3].order < 11) && (unmatchedCard.order > 10)) {
			console.log("get4CardsToKeep() = " + [unmatchedCard]);
			return [unmatchedCard];
		} else {
			console.log("get4CardsToKeep() = " + straightReturned);
			return straightReturned;
		}
	}

	console.log("get4CardsToKeep() = null");
	return null;
};

/*
 * Keep 3 cards if the hand is three of a kind.
 */
function get3CardsToKeep() {
	var groups = hand.groupCardsByRank();

	for ( var rank in groups) {
		if (groups[rank].length == 3) {
			console.log("get3CardsToKeep() = " + groups[rank]);
			return groups[rank];
		}
	}

	console.log("get3CardsToKeep() = null");
	return null;
}


function findBest2Of3FaceCards(cards) {
	var groups = {};
	var cardsToReturn = [];

	// Determine suits of facecards
	for (var i = 0; i < cards.length; i += 1) {
		if (!(cards[i].suit in groups)) {
			groups[cards[i].suit] = [];
		}
		groups[cards[i].suit].push(cards[i]);
	}

	// Find cards with matching suits and return it.
	for ( var suit in groups) {
		if (groups[suit].length == 2) {
			return groups[suit];
		}
	}

	// If cards without matching suits found then return the lowest order face cards.
	cardsToReturn[0] = cards[0];
	cardsToReturn[1] = cards[1];

	return cardsToReturn;
}

/*
 * Keep 2 cards if the hand has a pair of face cards, has a low pair and we have
 * no face cards or we have some face cards. If we don't have a pair then keep
 * two of the face cards with the same suit of the lower face cards so that we
 * have a greater chance of a flush. Return one face card if that is all that
 * we have.
 */
function get2CardsToKeep() {
	var groups = hand.groupCardsByRank();
	var rankOfLowPair = "";
	var faceCardsFound = [];
	var best2Of3Cards;

	// Return pair if it is face cards; otherwise, remember face cards found.
	for ( var rank in groups) {
		if (groups[rank].length == 2) {
			if ((rank == "J") || (rank == "Q") || (rank == "K")
					|| (rank == "A")) {
				console.log("get2CardsToKeep() = " + groups[rank]);
				return groups[rank];
			} else {
				rankOfLowPair = rank;
			}
		} else {
			if ((rank == "J") || (rank == "Q") || (rank == "K")
					|| (rank == "A")) {
				faceCardsFound.push(groups[rank][0]);
			}
		}
	}

	// Return any pair found if no face cards found.
	if ((rankOfLowPair != "") && (faceCardsFound.length == 0)) {
		console.log("get2CardsToKeep() = " + groups[rankOfLowPair]);
		return groups[rankOfLowPair];
	}

	// Return face cards found.
	switch (faceCardsFound.length) {
	case 0:
		console.log("get2CardsToKeep() = null");
		return null;
	case 1:
	case 2:
		console.log("get2CardsToKeep() = " + faceCardsFound);
		return faceCardsFound;
	case 3:
		best2Of3Cards = findBest2Of3FaceCards(faceCardsFound);
		console.log("get2CardsToKeep() = " + best2Of3Cards );
		return best2Of3Cards;
	}

	return null;
}

function getCardsToKeep() {
	var cards;
	
	if(cards = get5CardsToKeep()) {
		return cards;
	} else if(cards = get4CardsToKeep()) {
		return cards;
	} else if(cards = get3CardsToKeep()) {
		return cards;
	} else if(cards = get2CardsToKeep()) {
		return cards;
	}
	
	return [];
}	

function clearCardsToKeep() {
	var keptSpanElement;
	var textNode;

	for (var i = 0; i < 5; i += 1) {
		keptSpanElement = document.getElementById("kept" + (i + 1));
		textNode = keptSpanElement.firstChild;
		if (textNode) {
			keptSpanElement.removeChild(textNode);
		}
	}
}

function showCardsToKeep(cardsToKeep) {
	var keptSpanElement;
	var textNode;

	setupHand();
	for (var i = 0; i < cardsToKeep.length; i += 1) {
		keptSpanElement = document.getElementById("kept"
				+ (hand.cards.indexOf(cardsToKeep[i]) + 1));
		keptSpanElement.appendChild(document.createTextNode("KEEP"));
	}
}

function createResultHeaderRow() {
	var rowElement = document.createElement("tr");
	var columnElement = document.createElement("td");

	columnElement = document.createElement("th");
	columnElement.appendChild(createTextNode("PATTERN"));
	rowElement.appendChild(columnElement);
	columnElement = document.createElement("th");
	columnElement.appendChild(createTextNode("PROBABILITY"));
	rowElement.appendChild(columnElement);
	columnElement = document.createElement("th");
	columnElement.appendChild(createTextNode("EXPECTED VALUE"));
	rowElement.appendChild(columnElement);

	return rowElement;
}

function createResultRow(result) {
	var rowElement = document.createElement("tr");
	var columnElement = document.createElement("td");
	var textNode;
	var pattern = '';

	for (var i = 0; i < 5; i += 1) {
		pattern += result.pattern.cards[i].rank;
		pattern += result.pattern.cards[i].suit;
		pattern += " ";
	}
	columnElement.appendChild(document.createTextNode(pattern));
	columnElement.appendChild(document.createTextNode(result.probability));
	columnElement.appendChild(document.createTextNode(result.ExpectedValue));

	return rowElement;
}

function showResults(results, message) {
	var resultsDivElement = document.getElementById("results");
	var tableElement = document.createElement("table");
	var theadElement = document.createElement("thead");
	var tbodyElement = document.createElement("tbody");
	var captionElement = document.createElement("caption");
	var captionText = document.createTextNode(message);
	var rowElement;

	for (var i = 0; i < 5; i += 1) {
		rowElement = createResultRow(results[i]);
		tbodyElement.appendChild(rowElement);
	}

	captionElement.appendChild(captionText);
	tableElement.appendChild(captionElement);
	theadElement.appendChild(createResultHeaderRow());
	tableElement.appendChild(theadElement);
	tableElement.appendChild(tbodyElement);
	resultsDivElement.appendChild(tableElement)
}

function findRadioButton(namePrefix, index) {
	var radios = document.getElementsByName(namePrefix + (index + 1));
	for (var i = 0, iMax = radios.length; i < iMax; i += 1) {
		return radios[i].value;
	}
}

function setupHand() {
	var rank, suit;
	var card, cards = [];

	for (var i = 0; i < 5; i += 1) {
		rank = findRadioButton('r', i);
		suit = findRadioButton('s', i);
		card = deck.findCardInDeck(rank, suit);
		cards.push(card);
	}
	hand = new Hand(cards);
}

function calculate(event) {
	console.log("entering calculate(" + event + ")");
	try {
		setupHand();
		hand.sort();
		clearCardsToKeep();
		showCardsToKeep(getCardsToKeep());
	} catch (exception) {
		console.log(exception);
	}
	console.log("exiting calculate()");
	event.preventDefault();
	return false;
}

function init() {
	var submitButtonElement = document.getElementById("submitButton");
	var resetButtonElement = document.getElementById("resetButton");

	deck = new Deck();
	submitButtonElement.addEventListener("click", calculate);
	resetButtonElement.addEventListener("click", clearCardsToKeep);
}

window.addEventListener("load", init);
