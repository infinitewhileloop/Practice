// https://exercism.org/tracks/javascript/exercises/elyses-transformative-enchantments/

// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(x => x * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.map(function(card) {
        if (card === 3) {
            return [3, 3, 3];
        } else {
            return card;
        }
    }).flat();
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice(deck.length / 2 - 1, deck.length / 2 + 1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with 10 cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
    let firstCard = deck.shift();
    let lastCard = deck.pop();
    deck.splice(deck.length / 2, 0, lastCard, firstCard);
    return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
    return deck.filter(x => x === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
      deck.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0
    });
    return deck;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
    deck.reverse();
    return deck;
}
