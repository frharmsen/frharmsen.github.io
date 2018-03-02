/**
 * A class-like object for creating Cards.
 */
"use strict";

var Card = function(rank, suit, order) {
	this.rank = rank;
	this.suit = suit;
	this.order = order;
	this.dealt = false;
	this.kept = false;
}

Card.prototype.clone = function() {
	var clone = new Object(card);

	clone.rank = this.rank;
	clone.suit = this.suit;
	clone.order = this.order;

	return card
};

Card.prototype.toString = function() {
	return "[" + this.rank + ", " + this.suit + "]";
};

/*
 * Static fields and methods.
 */
Card.RANKS = [ "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A" ];
Card.SUITS = [ "C", "D", "H", "S" ];

Card.cloneCards = function(cards) {
	var cardCount = cards.length;
	var clonedCards = [];

	for (var i = 0; i < cardCount; i += 1) {
		clonedCards.push(cards[i].clone());
	}

	return clonedCards;
};

Card.shuffleCards = function(cards) {
	var cardCount = cards.length;

	for (var i = 0; i < cardCount; i += 1) {
		var target = Math.floor(Math.random() * cardCount);
		var tmp = cards[target];
		cards[target] = cards[i];
		cards[i] = tmp;
	}
};

