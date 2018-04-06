/**
 * A class-like object for Decks.
 * 
 * Requires card.js to be included.
 */
"use strict";

/*
 * Constructor
 */
var Deck = function() {
	this.cards = [];

	for (var i = 0; i < Card.RANKS.length; i += 1) {
		for (var j = 0; j < Card.SUITS.length; j += 1) {
			this.cards.push(new Card(Card.RANKS[i], Card.SUITS[j], i + 2));
		}
	}
};

/*
 * Instance functions.
 */
Deck.prototype.shuffle = function() {
	var cardCount = this.cards.length;
	var target;
	var tmp;
	
	for (var i = 0; i < cardCount; i += 1) {
		target = Math.floor(Math.random() * cardCount);
		tmp = this.cards[target];
		this.cards[target] = this.cards[i];
		this.cards[i] = tmp;
	}
};

Deck.prototype.returnCardsToDeck = function() {
	for (var i = 0; i < this.cards.length; i += 1) {
		this.cards[i].dealt = false;
		this.cards[i].kept = false;
	}
};

Deck.prototype.findCardInDeck = function(rank, suit) {
	for (var i = 0, iMax = this.cards.length; i < iMax; i += 1) {
		if ((this.cards[i].rank == rank) && (this.cards[i].suit == suit)) {
			return this.cards[i]
		}
	}
};