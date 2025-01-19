import { getDecks, createDeck } from './deckUtils';

// Get predefined decks
const decks = getDecks();
console.log('Predefined Decks:', decks);

// Create a new deck
const newDeck = createDeck('History');
console.log('User-Created Deck:', newDeck);
