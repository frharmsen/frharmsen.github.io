/**
 * A class-like object for Hands.
 * 
 * Requires hand.js to be included.
 */
"use strict";

/*
 * Constructor
 */
var Hand = function(cards) {
	this.cards = cards;
};

/*
 * Static fields.
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

/*
 * Static functions.
 */

/*
 * This is an internal function that should not be called by anything other than
 * the functions of this module. It does not check for pairs. This should be
 * done before calling.
 */
Hand._isStraightDraw = function(cards) {
	if ((cards[cards.length - 1].order - cards[0].order) <= 5) {
		return true;
	}

	if ((cards[0].rank == "2") && (cards[cards.length - 1].rank == "A")
			&& ((cards[cards.length - 2].order - cards[0].order) <= 5)) {
		return true;
	}

	return false;
};

/*
 * This is an internal function that should not be called by anything other than
 * the functions of this module. It determines which two of the three facecards
 * given to return.
 */
Hand._findBest2Of3FaceCards = function(cards) {
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
};
/*
 * Instance functions.
 */
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

	for (var i = 1; i < this.cards.length; i += 1) {
		value += 1;
		if (this.cards[i].order != value) {
			if ((i == this.cards.length - 1) && (this.cards[0].rank == "2")
					&& (this.cards[i].rank == "A")) {
				return true;
			} else {
				return false;
			}
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
 * Keep 5 cards if the hand is a royal flush, straight flush, 4 of a kind, full
 * house, flush, or straight.
 */
Hand.prototype.get5CardsToKeep = function() {
	if (this.isRoyalFlush() || this.isStraightFlush() || this.isFourOfAKind()
			|| this.isFullHouse() || this.isFlush() || this.isStraight()) {
		return this.cards;
	}

	return null;
};

Hand.prototype.getTwoPair = function() {
	var groups = this.groupCardsByRank();
	var pairsReturned = [];

	for ( var rank in groups) {
		if (groups[rank].length == 2) {
			pairsReturned.push(groups[rank][0]);
			pairsReturned.push(groups[rank][1]);
		}
	}

	return pairsReturned;
};

/*
 * Keep 4 cards if the hand is a straight flush draw without face card remaining
 * and the straight flush has no face cards or the hand is two pair.
 */
Hand.prototype.get4CardsToKeep = function() {
	var groups;
	var straightReturned = [];
	var unmatchedCard;

	if (this.isTwoPair()) {
		return this.getTwoPair();
	}

	groups = this.groupCardsBySuit();
	for ( var suit in groups) {
		if (groups[suit].length == 1) {
			unmatchedCard = groups[suit][0];
		}
		if (groups[suit].length == 4) {
			groups[suit].sort(function(card1, card2) {
				return card1.order - card2.order;
			});
			if (Hand._isStraightDraw(groups[suit])) {
				straightReturned.push(groups[suit][0]);
				straightReturned.push(groups[suit][1]);
				straightReturned.push(groups[suit][2]);
				straightReturned.push(groups[suit][3]);
			}
		}
	}

	if (straightReturned.length == 4) {
		if ((straightReturned[0].order < 11) && (unmatchedCard.order > 10)) {
			return [unmatchedCard];
		} else {
			return straightReturned;
		}
	}

	return null;
};

/*
 * Keep 3 cards if the hand is three of a kind.
 */
Hand.prototype.get3CardsToKeep = function() {
	var groups = this.groupCardsByRank();

	for ( var rank in groups) {
		if (groups[rank].length == 3) {
			return groups[rank];
		}
	}

	return null;
}

/*
 * Keep 2 cards if the hand has a pair of face cards, has a low pair and we have
 * no face cards or we have some face cards. If we don't have a pair then keep
 * two of the face cards with the same suit of the lower face cards so that we
 * have a greater chance of a straight. Return one face card if that is all that
 * we have.
 */
Hand.prototype.get2CardsToKeep = function() {
	var groups = this.groupCardsByRank();
	var rankOfLowPair = "";
	var faceCardsFound = [];

	// Return pair if it is face cards; otherwise, remember face cards found.
	for ( var rank in groups) {
		if (groups[rank].length == 2) {
			if ((rank == "J") || (rank == "Q") || (rank == "K")
					|| (rank == "A")) {
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
		return groups[rankOfLowPair];
	}

	// Return face cards found.
	switch (faceCardsFound.length) {
	case 0:
		return null;
	case 1:
	case 2:
		return faceCardsFound;
	case 3:
		return Hand._findBest2Of3FaceCards(faceCardsFound);
	}

	return null;
}

Hand.prototype.getCardsToKeep = function() {
	var cards;
	
	if(cards = this.get5CardsToKeep()) {
		return cards;
	} else if(cards = this.get4CardsToKeep()) {
		return cards;
	} else if(cards = this.get3CardsToKeep()) {
		return cards;
	} else if(cards = this.get2CardsToKeep()) {
		return cards;
	}
	
	return [];
}	
