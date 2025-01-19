import DeckModel from '../models/DeckModel';
import { saveToLocalStorage, getFromLocalStorage } from './storageUtils';

// Local storage key for user-created decks
const USER_DECK_STORAGE_KEY = 'user-decks';

// Predefined decks
const predefinedDecks = [
  new DeckModel('Math', 'deck-math'),
  new DeckModel('Science', 'deck-science'),
];

// Add sample cards to predefined decks
predefinedDecks[0].addCard('What is 2 + 2?', '4');
predefinedDecks[0].addCard('What is 5 x 3?', '15');
predefinedDecks[1].addCard('What is H2O?', 'Water');
predefinedDecks[1].addCard('What planet is closest to the Sun?', 'Mercury');

/**
 * Get all decks, combining predefined and user-created decks.
 * @returns {Array} Array of all decks.
 */
export const getDecks = () => {
  const userDecks = getFromLocalStorage(USER_DECK_STORAGE_KEY) || [];
  return [...predefinedDecks, ...userDecks];
};

/**
 * Create and save a new user-defined deck.
 * @param {string} name - The name of the deck.
 * @returns {DeckModel} The newly created deck.
 */
export const createDeck = (name) => {
  const newDeck = new DeckModel(name);
  const userDecks = getFromLocalStorage(USER_DECK_STORAGE_KEY) || [];
  userDecks.push(newDeck);
  saveToLocalStorage(USER_DECK_STORAGE_KEY, userDecks);
  return newDeck;
};

/**
 * Save a flashcard to a specific deck.
 * @param {string} deckId - The ID of the deck.
 * @param {string} question - The question for the flashcard.
 * @param {string} answer - The answer for the flashcard.
 */
export const addCardToDeck = (deckId, question, answer) => {
  const userDecks = getFromLocalStorage(USER_DECK_STORAGE_KEY) || [];
  const updatedDecks = userDecks.map((deck) => {
    if (deck.id === deckId) {
      deck.cards.push({ question, answer, id: `card-${Date.now()}` });
    }
    return deck;
  });
  saveToLocalStorage(USER_DECK_STORAGE_KEY, updatedDecks);
};
