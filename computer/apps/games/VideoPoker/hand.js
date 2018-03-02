/**
 * A class-like object for Hands.
 * 
 * Requires hand.js to be included.
 */
"use strict";

var Hand = function(cards) {
	this.cards = cards;
};

Hand.prototype.getWinnings = function() {
	var winnings = -1;

	if (this.isRoyalFlush()) {
		winnings = Hand.ROYAL_FLUSH;
	} else if (this.isStraightFlush()) {
		winnings = Hand.STRAIGHT_FLUSH;
	} else if (this.isFourOfAKind()) {
		winnings = Hand.FOUR_OF_A_KIND;
	} else if (this.isFullHouse()) {
		winnings = Hand.FULL_HOUSE;
	} else if (this.isFlush()) {
		winnings = Hand.FLUSH;
	} else if (this.isStraight()) {
		winnings = Hand.STRAIGHT;
	} else if (this.isThreeOfAKind()) {
		winnings = Hand.THREE_OF_A_KIND;
	} else if (this.isTwoPair()) {
		winnings = Hand.TWO_PAIR;
	} else if (this.isJacksOrBetter()) {
		winnings = Hand.JACKS_OR_BETTER;
	} else {
		winnings = Hand.LOSING_HAND;
	}

	return winnings;
};

Hand.prototype.isRoyalFlush = function() {
	if (this.cards[0].rank != "T") {
		return false;
	}

	return this.isStraightFlush();
};

Hand.prototype.isStraightFlush = function() {
	if (!(this.isStraight())) {
		return false;
	}

	return this.isFlush();
};

Hand.prototype.isFourOfAKind = function() {
	var groups = this.groupCardsByRank();

	for ( var rank in groups) {
		if (groups[rank].length == 4) {
			return true;
		}
	}

	return false;
};

Hand.prototype.isFullHouse = function() {
	var groups = this.groupCardsByRank();

	for ( var rank in groups) {
		if ((groups[rank].length != 3) && (groups[rank].length != 2)) {
			return false;
		}
	}

	return true;
};

Hand.prototype.isFlush = function() {
	var groups = this.groupCardsBySuit();

	for ( var rank in groups) {
		if (groups[rank].length != 5) {
			return false;
		}
	}

	return true;
};

Hand.prototype.isStraight = function() {
	var value = this.cards[0].order;
	var rangeOfDeck;

	if ((this.cards[0].rank == "2") && (this.cards[4].rank == "A")) {
		rangeOfDeck = 4;
	} else {
		rangeOfDeck = 5;
	}
	for (var i = 1; i < rangeOfDeck; i += 1) {
		value += 1;
		if (this.cards[i].order != value) {
			return false;
		}
	}

	return true;
};

Hand.prototype.isThreeOfAKind = function() {
	var groups = this.groupCardsByRank();

	for ( var rank in groups) {
		if (groups[rank].length == 3) {
			return true;
		}
	}

	return false;
};

Hand.prototype.isTwoPair = function() {
	var groups = this.groupCardsByRank();
	var pairCount = 0;

	for ( var rank in groups) {
		if (groups[rank].length == 2) {
			pairCount += 1;
		}
	}

	return pairCount == 2;
};

Hand.prototype.isJacksOrBetter = function() {
	var groups = this.groupCardsByRank();

	for ( var rank in groups) {
		if (groups[rank].length == 2) {
			if ((rank == "J") || (rank == "Q") || (rank == "K")
					|| (rank == "A")) {
				return true;
			}
		}
	}

	return false;
}

Hand.prototype.groupCardsByRank = function() {
	var cardCount = this.cards.length;
	var card;
	var groups = {};

	for (var i = 0; i < cardCount; i += 1) {
		card = this.cards[i];
		if (!(card.rank in groups)) {
			groups[card.rank] = [];
		}
		groups[card.rank].push(card);
	}

	return groups;
};

Hand.prototype.groupCardsBySuit = function() {
	var cardCount = this.cards.length;
	var card;
	var groups = {};

	for (var i = 0; i < cardCount; i += 1) {
		card = this.cards[i];
		if (!(card.suit in groups)) {
			groups[card.suit] = [];
		}
		groups[card.suit].push(card);
	}

	return groups;
};

/*
 * Static fields and methods.
 */
Hand.LOSING_HAND = 0;
Hand.JACKS_OR_BETTER = 1;
Hand.TWO_PAIR = 2;
Hand.THREE_OF_A_KIND = 3;
Hand.STRAIGHT = 4;
Hand.FLUSH = 5;
Hand.FULL_HOUSE = 6;
Hand.FOUR_OF_A_KIND = 7;
Hand.STRAIGHT_FLUSH = 8;
Hand.ROYAL_FLUSH = 9;

Hand.WINNINGS_STRINGS = [ "LOSING HAND", "JACKS OR BETTER", "TWO PAIR",
		"THREE OF A KIND", "STRAIGHT", "FLUSH", "FULL HOUSE", "FOUR OF A KIND",
		"STRAIGHT FLUSH", "ROYAL FLUSH" ],

Hand.WINNINGS_VALUES = [ 0.0, 10.0, 20.0, 30.0, 40.0, 60.0, 90.0, 250.0, 500.0,
		8000.0 ];
